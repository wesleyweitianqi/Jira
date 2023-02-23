import React, { useState, useEffect } from "react";
import SearchPanel from "./SearchPanel";
import List from "./List";
import * as qs from "qs";
import { cleanObject, useDebounce, useMount } from "utils";
import { useHttp } from "utils/http";

export interface Project {
  id: string;
  name: string;
  personId: string;
  organization: string;
  pin: string;
}

export interface User {
  id: string;
  name: string;
  token: string;
}

const apiURL = process.env.REACT_APP_API_URL;

function ProjectList() {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [list, setList] = useState([]);

  const debouncedParam = useDebounce(param, 200);
  const client = useHttp();
  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then(setList);
  }, [debouncedParam]);

  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List users={users} projects={projects} />
    </div>
  );
}

export default ProjectList;

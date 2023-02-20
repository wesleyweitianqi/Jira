import React, { useState, useEffect } from "react";
import SearchPanel from "./SearchPanel";
import List from "./List";
import * as qs from "qs";
import { cleanObject, useDebounce, useMount } from "utils";

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
}

const apiURL = process.env.REACT_APP_API_URL;
function ProjectList() {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  const debouncedParam = useDebounce(param, 200);
  useEffect(() => {
    fetch(
      `${apiURL}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    ).then(async (res) => {
      if (res.ok) setProjects(await res.json());
    });
  }, [debouncedParam]);

  useMount(() => {
    fetch(`${apiURL}/users`).then(async (res) => {
      if (res.ok) setUsers(await res.json());
    });
  });

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List users={users} projects={projects} />
    </div>
  );
}

export default ProjectList;

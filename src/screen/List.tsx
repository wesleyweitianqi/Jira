import React from "react";
import { Project, User } from "./index";

interface ListProps {
  projects: Project[];
  users: User[];
}
function List({ projects, users }: ListProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Project</th>
          <th>Supervisor</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => {
          return (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>
                {users.find((user) => user.id === project.personId)?.name}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default List;

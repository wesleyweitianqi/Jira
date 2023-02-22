import { useAuth } from "context/auth-context";
import React from "react";
import ProjectList from "screen";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>Log out</button>
      <ProjectList />
    </div>
  );
};

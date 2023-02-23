import React, { useState } from "react";
import Register from "./register";
import Login from "./login";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div>
      {isRegister ? <Register /> : <Login />}
      <button onClick={() => setIsRegister(!isRegister)}>
        Toggle to {isRegister ? "Login " : "Register"}{" "}
      </button>
    </div>
  );
};

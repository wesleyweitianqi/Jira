import React from "react";

import "./App.css";
import { useAuth } from "context/auth-context";
import { AuthenticatedApp } from "AuthenticatedApp";
import { UnauthenticatedApp } from "unauthentication/index";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;

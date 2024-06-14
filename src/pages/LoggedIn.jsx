import React from "react";
import { useLocation } from "react-router-dom";
import Form from "../components/Form";

function LoggedIn() {
  const location = useLocation();
  const { username, password } = location.state.credentials;
  const isLoggedIn = location.state.isLoggedIn;

  return (
    <div>
      <Form
        usernamePassed={username}
        passwordPassed={password}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
}

export default LoggedIn;

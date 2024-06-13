import React, { useState } from "react";
import { HiExclamationTriangle } from "react-icons/hi2";
import { FORM } from "../components/Constants";

function Form() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div style={FORM}>
      <form>
        <label>username</label>
        <input type="text" placeholder="username"></input>
        <div>
          <HiExclamationTriangle />
          <p>Account exists, Incorrect Password</p>
        </div>
        <label>password</label>
        <input type="password" placeholder="password"></input>
        <div>
          <HiExclamationTriangle />
          <p>Account Credentials are Invalid</p>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Form;

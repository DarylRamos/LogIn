import React, { useState } from "react";
import { HiExclamationTriangle, HiEye } from "react-icons/hi2";
import Constants from "../components/Constants";
import { useNavigate } from "react-router-dom";

function Form({ isLoggedIn, usernamePassed, passwordPassed }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: usernamePassed ? usernamePassed : "",
    password: passwordPassed ? passwordPassed : "",
  });
  const [error1, setError1] = useState();
  const [error2, setError2] = useState();
  const [visible, setVisible] = useState(false);
  const accounts = JSON.parse(localStorage.getItem("accounts"));

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    const user = accounts.find(
      (account) => account.username == credentials.username
    );
    if (user) {
      if (user.password == credentials.password) {
        setError1("");
        console.log("Password Match");
        navigate("/authenticated", {
          state: { credentials, isLoggedIn: true },
        });
      } else {
        console.log("Incorrect Password");
        setError1("Account exists, Incorrect Password");
        setError2("");
      }
    } else {
      console.log("User not found");
      setError2("Account Credentials are Invalid");
      setError1("");
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const userIndex = accounts.findIndex((account) => {
      return usernamePassed === account.username;
    });

    const userUniqueness = accounts.find(
      (account) => account.username == credentials.username
    );

    //Verify Username Uniqueness
    if (userUniqueness) {
      if (userUniqueness.username == usernamePassed) {
        accounts[userIndex].username = credentials.username;
        localStorage.setItem("accounts", JSON.stringify(accounts));
      } else {
        console.log("ERROR - Create a Unique Username");
        setError1("Username should be unique.");
      }
    } else {
      accounts[userIndex].username = credentials.username;
      localStorage.setItem("accounts", JSON.stringify(accounts));
    }

    //Verify Password Requirements
    const passRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    if (passRegex.test(credentials.password)) {
      accounts[userIndex].password = credentials.password;
      localStorage.setItem("accounts", JSON.stringify(accounts));
    } else {
      console.log("Incorrect Password Change");
      setError2(
        "Password should have at least 8 characters, one uppercase letter, one lowercase letter, one number, and one symbol."
      );
    }
    console.log(accounts[userIndex]);
  };

  return (
    <div style={Constants.BACKGROUND}>
      <p
        style={{
          ...Constants.FONT,
          ...Constants.GREETING,
          visibility: isLoggedIn ? "visible" : "hidden",
        }}
      >{`Hi ${usernamePassed},`}</p>
      <form
        style={{ ...Constants.FORM, ...Constants.FONT }}
        onSubmit={isLoggedIn ? handleUpdate : handleLogIn}
      >
        <label>username</label>
        <input
          style={{
            ...Constants.FONT,
            ...Constants.INPUT,
            ...Constants.REMOVE_BORDER,
          }}
          type="text"
          placeholder="username"
          name="username"
          defaultValue={credentials.username && credentials.username}
          onChange={handleChange}
        ></input>
        <p
          style={{
            ...Constants.ERROR,
            visibility: error1 ? "visible" : "hidden",
          }}
        >
          <span style={{ padding: "5px 5px 0px 0px" }}>
            <HiExclamationTriangle style={{ fontSize: "18px" }} />
          </span>

          {error1}
        </p>

        <label>password</label>

        <div
          style={{
            ...Constants.INPUT,
            display: "flex",
          }}
        >
          <input
            style={{ ...Constants.FONT, ...Constants.REMOVE_BORDER }}
            type={visible ? "text" : "password"}
            placeholder="password"
            name="password"
            defaultValue={credentials.password && credentials.password}
            onChange={handleChange}
          ></input>
          <div
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => setVisible(!visible)}
          >
            <HiEye
              style={
                visible
                  ? { color: "#000000", fontSize: "20px" }
                  : { color: "#AFAFAF", fontSize: "20px" }
              }
            />
          </div>
        </div>

        <p
          style={{
            ...Constants.ERROR,
            visibility: error2 ? "visible" : "hidden",
          }}
        >
          <span style={{ padding: "5px 5px 0px 0px" }}>
            <HiExclamationTriangle style={{ fontSize: "18px" }} />
          </span>
          {error2}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{ ...Constants.FONT, ...Constants.SUBMIT }}
            type="submit"
          >
            {isLoggedIn ? "Update Details" : "Login"}
          </button>
          <button
            style={{
              ...Constants.FONT,
              ...Constants.LOGOUT,
              display: isLoggedIn ? "block" : "none",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

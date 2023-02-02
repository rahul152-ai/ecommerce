import React from "react";
import "./Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCall";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    const res = login(dispatch, { username, password });
    if (res === 200) {
      history.push("/");
    }
  };
  return (
    <div className="maincontainer">
      <div className="login-page">
        <div className="form">
          <div className="studentLoginBox">Admin Login</div>
          <div className="login-form">
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleClick}>login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

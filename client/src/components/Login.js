import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialForm = { username: "", password: "" };

const Login = props => {
  const [credentials, setCredentials] = useState(initialForm);

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        setCredentials(initialForm);
        props.history.push("/bubbles");
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder=" Username"
          value={credentials.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder=" Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default Login;

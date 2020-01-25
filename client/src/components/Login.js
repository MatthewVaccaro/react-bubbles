import React, { useEffect, useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [inputField, setInputField] = useState({
    username: "",
    password: ""
  });

  const changeHandler = e => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    AxiosWithAuth()
      .post("api/login", inputField)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>

      <form onSubmit={submitHandler}>
        <input
          name="username"
          placeholder="Login"
          type="text"
          value={inputField.username}
          onChange={changeHandler}
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          value={inputField.password}
          onChange={changeHandler}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

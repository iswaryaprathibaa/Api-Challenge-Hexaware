import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/LogIn.css";

const LogIn = () => {

  let nav = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {

    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const login = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:8080/api/users/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(loginData)
        }
      );

      if (response.ok) {

        const data = await response.json();

        console.log(data);

        localStorage.setItem("token", data.jwt);

        localStorage.setItem("userId", data.userId);

        localStorage.setItem("role", data.userRole);

        setMessage("Login Successful");

        setTimeout(() => {
          nav("/dashboard");
        }, 1500);

      } else {

        const errorData = await response.text();

        console.error(errorData);

        setMessage("Invalid Email or Password");
      }

    } catch (error) {

      console.error(error);

      setMessage("Server Error");
    }
  };

  return (

    <div className="signin-container">

      <div className="signin-overlay"></div>

      <form className="signin-form" onSubmit={login}>

        <h1 className="signin-logo">
          BookVault
        </h1>

        <h2 className="signin-heading">
          Welcome Back
        </h2>

        <p className="signin-subText">
          Login to continue managing your books
        </p>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={loginData.email}
          onChange={handleChange}
          className="signin-input"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={loginData.password}
          onChange={handleChange}
          className="signin-input"
          required
        />

        <button type="submit" className="signin-button">
          Login
        </button>

        {
          message && (
            <p className="signin-message">
              {message}
            </p>
          )
        }

        <p className="signin-registerText">

          Don't have an account?

          <Link to="/signup" className="signin-registerLink">
            Register
          </Link>

        </p>

      </form>

    </div>
  );
};

export default LogIn;
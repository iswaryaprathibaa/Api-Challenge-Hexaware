import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/SignUp.css";

const SignUp = () => {

  let nav = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    userRole: "USER"
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {

    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const signup = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:8080/api/users/signup",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(userData)
        }
      );

      if (response.ok) {

        const data = await response.json();

        console.log(data);

        setMessage("Signup Successful");

        setTimeout(() => {
          nav("/login");
        }, 1500);

      } else {

        const errorData = await response.text();

        console.error(errorData);

        setMessage(errorData);
      }

    } catch (error) {

      console.error(error);

      setMessage("Server Error");
    }
  };

  return (

    <div className="container">

      <div className="overlay"></div>

      <form className="form" onSubmit={signup}>

        <h1 className="logo">
          BookVault
        </h1>

        <h2 className="heading">
          Create Account
        </h2>

        <p className="subText">
          Join us and manage your books securely
        </p>

        <input
          type="text"
          name="name"
          placeholder="Enter Full Name"
          value={userData.name}
          onChange={handleChange}
          className="input"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={userData.email}
          onChange={handleChange}
          className="input"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={userData.password}
          onChange={handleChange}
          className="input"
          required
        />

        <select
          name="userRole"
          value={userData.userRole}
          onChange={handleChange}
          className="input"
        >

          <option value="USER">
            USER
          </option>

          <option value="ADMIN">
            ADMIN
          </option>

        </select>

        <button type="submit" className="button">
          Create Account
        </button>

        {
          message && (
            <p className="message">
              {message}
            </p>
          )
        }

        <p className="loginText">

          Already have an account?

          <Link to="/login" className="loginLink">
            Login
          </Link>

        </p>

      </form>

    </div>
  );
};

export default SignUp;
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const styles = {

    navbar: {
      width: "100%",
      height: "80px",
      backgroundColor: "#0f172a",
      color: "white",

      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      padding: "0 60px",
      boxSizing: "border-box"
    },

    logo: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#38bdf8"
    },

    navLinks: {
      display: "flex",
      listStyle: "none",
      gap: "30px",
      margin: 0,
      padding: 0
    },

    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "18px",
      transition: "0.3s"
    },

    authButtons: {
      display: "flex",
      gap: "15px"
    },

    signInBtn: {
      padding: "10px 18px",
      border: "1px solid #38bdf8",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "15px",

      backgroundColor: "#38bdf8",
      color: "black"
    },

    signUpBtn: {
      padding: "10px 18px",
       border: "1px solid #38bdf8",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "15px",

      backgroundColor: "#38bdf8",
      color: "black"
    }

  };

  return (

    <nav style={styles.navbar}>

      <div style={styles.logo}>
        BookVault
      </div>

      <ul style={styles.navLinks}>

        <li>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>

       

        <li>
          <Link to="/about" style={styles.link}>
            About
          </Link>
        </li>
         <li>
          <Link to="/Faq" style={styles.link}>
            Faq
          </Link>
        </li>

      </ul>

      <div style={styles.authButtons}>

        <Link to="/login">
          <button style={styles.signInBtn}>
            LogIn
          </button>
        </Link>

        <Link to="/signup">
          <button style={styles.signUpBtn}>
            Sign Up
          </button>
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;
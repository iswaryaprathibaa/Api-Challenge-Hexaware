import React from "react";
import { Collapse } from "antd";
import Footer from "../Home/Footer";
import Navbar from "../common/Navbar";

const faqItems = [

  {
    key: "1",

    label: "How do I create an account?",

    children: (
      <p>
        Click on the Sign Up button in the navigation bar,
        fill in your details, select your role,
        and create your account securely.
      </p>
    ),
  },

  

  {
    key: "2",

    label: "Can I manage books after login?",

    children: (
      <p>
        Yes. Once authenticated, users can access
        book management features like adding,
        updating, deleting, and viewing books.
      </p>
    ),
  },

  {
    key: "3",

    label: "What roles are available?",

    children: (
      <p>
        The application supports USER and ADMIN roles.
        Admin users can have additional privileges
        based on backend authorization.
      </p>
    ),
  }

 
];

const Faq= () => {

  const onChange = (key) => {
    console.log(key);
  };

  return (
    
    <div
    >
      <Navbar/>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#0f172a",
        }}
      >
        Frequently Asked Questions
      </h1>

      <Collapse
        items={faqItems}
        defaultActiveKey={["1"]}
        onChange={onChange}
        accordion
      />
    <Footer/>
    </div>
  );
};

export default Faq;
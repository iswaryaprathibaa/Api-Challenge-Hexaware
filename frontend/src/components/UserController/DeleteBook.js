import React, { useState } from "react";
import "../css/DeleteBook.css";
import { useNavigate } from "react-router-dom";

const DeleteBook = () => {
    let nav=useNavigate();
  const token = localStorage.getItem("token");

  const [isbn, setIsbn] = useState("");

  const [message, setMessage] = useState("");

  const deleteBook = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        `http://localhost:8080/api/books/delete/${isbn}`,
        {
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {

        setMessage("Book Deleted Successfully");

        setIsbn("");

        nav("/dashboard")
      } else {

        setMessage(data.message || "Failed To Delete Book");
      }

    } catch (error) {

      console.log(error);

      setMessage("Server Error");
    }
  };

  return (

    <div className="deletebook-container">

      <form
        className="deletebook-form"
        onSubmit={deleteBook}
      >

        <h1>
          Delete Book
        </h1>

        <input
          type="number"
          placeholder="Enter ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
        />

        <button type="submit">
          Delete Book
        </button>

        {
          message && (
            <p className="delete-message">
              {message}
            </p>
          )
        }

      </form>

    </div>
  );
};

export default DeleteBook;
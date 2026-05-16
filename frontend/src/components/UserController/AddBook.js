import React, { useState } from "react";
import "../css/AddBook.css";
import { useNavigate } from "react-router-dom";

const AddBook = () => {

  let nav = useNavigate();

  const token = localStorage.getItem("token");

  const [bookData, setBookData] = useState({
    isbn: "",
    title: "",
    author: "",
    publicationYear: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {

    setBookData({
      ...bookData,
      [e.target.name]: e.target.value
    });
  };

  const addBook = async (e) => {

    e.preventDefault();

    console.log("TOKEN :", token);

    try {

      const response = await fetch(
        "http://localhost:8080/api/books/addBook",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },

          body: JSON.stringify({
            isbn: Number(bookData.isbn),
            title: bookData.title,
            author: bookData.author,
            publicationYear: Number(bookData.publicationYear)
          })
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {

        setMessage("Book Added Successfully");

        setBookData({
          isbn: "",
          title: "",
          author: "",
          publicationYear: ""
        });

        setTimeout(() => {

          nav("/dashboard");

        }, 1500);

      } else {

        setMessage(data.message || "Failed To Add Book");
      }

    } catch (error) {

      console.log(error);

      setMessage(error.message);
    }
  };

  return (

    <div className="addbook-container">

      <form className="addbook-form" onSubmit={addBook}>

        <h1>
          Add New Book
        </h1>

        <input
          type="number"
          name="isbn"
          placeholder="Enter ISBN"
          value={bookData.isbn}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={bookData.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Enter Author"
          value={bookData.author}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="publicationYear"
          placeholder="Enter Publication Year"
          value={bookData.publicationYear}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Book
        </button>

        {
          message && (
            <p className="message">
              {message}
            </p>
          )
        }

      </form>

    </div>
  );
};

export default AddBook;
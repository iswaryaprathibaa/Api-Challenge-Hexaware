import React, { useState } from "react";
import "../css/UpdateBook.css";
import { useNavigate } from "react-router-dom";

const UpdateBook = () => {

    let nav=useNavigate();
  const token = localStorage.getItem("token");

  const [isbn, setIsbn] = useState("");

  const [bookData, setBookData] = useState({
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

  const updateBook = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        `http://localhost:8080/api/books/update/${isbn}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },

          body: JSON.stringify({
            isbn: Number(isbn),
            title: bookData.title,
            author: bookData.author,
            publicationYear: Number(bookData.publicationYear)
          })
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {

        setMessage("Book Updated Successfully");

        setBookData({
          title: "",
          author: "",
          publicationYear: ""
        });

        setIsbn("");
        setTimeout(() => {
            nav("/dashboard")
        }, 1500);

      } else {

        setMessage(data.message || "Failed To Update Book");
      }

    } catch (error) {

      console.log(error);

      setMessage("Server Error");
    }
  };

  return (

    <div className="updatebook-container">

      <form
        className="updatebook-form"
        onSubmit={updateBook}
      >

        <h1>
          Update Book
        </h1>

        <input
          type="number"
          placeholder="Enter ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
        />

        <input
          type="text"
          name="title"
          placeholder="Enter New Title"
          value={bookData.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Enter New Author"
          value={bookData.author}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="publicationYear"
          placeholder="Enter New Publication Year"
          value={bookData.publicationYear}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Update Book
        </button>

        {
          message && (
            <p className="update-message">
              {message}
            </p>
          )
        }

      </form>

    </div>
  );
};

export default UpdateBook;
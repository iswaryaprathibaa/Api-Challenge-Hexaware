import React, { useState } from "react";
import "../css/SearchBook.css";
import Book from "./Book";

const SearchBook = () => {

  const token = localStorage.getItem("token");

  const [isbn, setIsbn] = useState("");

  const [book, setBook] = useState(null);

  const [message, setMessage] = useState("");

  const searchBook = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        `http://localhost:8080/api/books/showById/${isbn}`,
        {
          method: "GET",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {

        setBook(data.data);

        setMessage("");

      } else {

        setBook(null);

        setMessage("Book Not Found");
      }

    } catch (error) {

      console.log(error);

      setMessage("Server Error");
    }
  };

  return (

    <div className="searchbook-container">

      <div className="searchbook-box">

        <h1>
          Search Book
        </h1>

        <form onSubmit={searchBook}>

          <input
            type="number"
            placeholder="Enter ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
          />

          <button type="submit">
            Search
          </button>

        </form>

        {
          message && (
            <p className="search-message">
              {message}
            </p>
          )
        }

        {
          book && (
            <div className="searched-book">

              <Book book={book} />

            </div>
          )
        }

      </div>

    </div>
  );
};

export default SearchBook;
import React from "react";
import "../css/Book.css";

const Book = ({ book }) => {

  return (

    <div className="book-card">

      <div className="book-card-top">

        <div className="book-icon">
          📚
        </div>

        <h2 className="book-title">
          {book.title}
        </h2>

      </div>

      <div className="book-details">

        <p>
          <span>Author :</span> {book.author}
        </p>

        <p>
          <span>ISBN :</span> {book.isbn}
        </p>

        <p>
          <span>Publication Year :</span> {book.publicationYear}
        </p>

      </div>

    </div>
  );
};

export default Book;
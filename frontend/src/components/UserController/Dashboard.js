import React, { useEffect, useState } from "react";
import { Drawer, Button } from "antd";
import {
  MenuOutlined,
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  LogoutOutlined
} from "@ant-design/icons";

import "../css/Dashboard.css";
import { useNavigate } from "react-router-dom";
import Book from "./Book";

const Dashboard = () => {
    let nav=useNavigate();

  const [open, setOpen] = useState(false);

  const [books, setBooks] = useState([]);

  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {

    fetchBooks();

  }, []);

  const fetchBooks = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/api/books/showAllBooks",
        {
          method: "GET",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.ok) {

        const data = await response.json();

        console.log(data);

        setBooks(data.data);

      } else {

        console.log("Failed to fetch books");
      }

    } catch (error) {

      console.log(error);
    }

    setLoading(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (

    <div className="dashboard-container">

      {/* Top Navbar */}

      <div className="topbar">

        <div className="topbar-left">

          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
          >
            Menu
          </Button>

          <h1 className="dashboard-title">
            BookVault Dashboard
          </h1>

        </div>

        <button
          className="logout-btn"
          onClick={() => {

            localStorage.clear();

            window.location.href = "/signin";
          }}
        >
          Logout
        </button>

      </div>

      {/* Drawer */}

      <Drawer
        title="BookVault Menu"
        placement="left"
        onClose={closeDrawer}
        open={open}
      >

       

          <div>
            <div
  className="drawer-item"
  onClick={() => {
    nav("/addbook");
  }}
>
            <PlusCircleOutlined className="drawer-icon" />

            <span>
              Add Book
            </span>

          </div>

          <div
  className="drawer-item"
  onClick={() => {
    nav("/updatebook");
  }}
>

            <EditOutlined className="drawer-icon" />

            <span>
              Update Book
            </span>

          </div>

          <div
  className="drawer-item"
  onClick={() => {
    nav("/deletebook");
  }}
>

            <DeleteOutlined className="drawer-icon" />

            <span>
              Delete Book
            </span>

          </div>

          
            <div
  className="drawer-item"
  onClick={() => {
    nav("/searchbook");
  }}
>
            <SearchOutlined className="drawer-icon" />
            
            <span>
              Search Book
            </span>

          </div>

          <div
            className="drawer-item logout-drawer"
            onClick={() => {

              localStorage.clear();

              window.location.href = "/login";
            }}
          >

            <LogoutOutlined className="drawer-icon" />

            <span>
              Logout
            </span>

          </div>

        </div>

      </Drawer>

      {/* Show Books By Default */}

      <div className="dashboard-content">

        <h2 className="available-books">
          Available Books
        </h2>

        {
          loading ?

            (
              <h2 className="loading">
                Loading Books...
              </h2>
            )

            :

            (
              <div className="books-grid">

                {
  books.length > 0 ?

    books.map((book, index) => (

      <Book
        key={index}
        book={book}
      />

    ))

    :

    (
      <h2>
        No Books Available
      </h2>
    )
}

              </div>
            )
        }

      </div>

    </div>
  );
};

export default Dashboard;
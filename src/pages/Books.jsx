import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const featchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/Books/all");
        console.log(res);
        setBooks(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }   
    };
    featchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/Books/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <h1>Books Shops</h1>
    <div className="books">
      {books.map((book) => (
        <div key={book.id} className="book">
          {book.cover && <img src={book.cover} alt="" />}
          <h2>{book.Book}</h2>
          <p>{book.description}</p>
          <span>{book.price}</span>
          <Button  variant="primary"className="delete" onClick={() => handleDelete(book.id)}>
            Delete
          </Button>
          <Link to={`/update/${book.id}`}>
            <Button className="update">Update</Button>
          </Link>
        </div>
      ))}
    </div>
    <Link to="/add" >
      <Button  variant="primary" className="btn">Add New Book</Button>
    </Link>
  </>
  );
};

export default Books;

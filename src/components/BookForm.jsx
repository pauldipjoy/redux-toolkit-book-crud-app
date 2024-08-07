/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "../features/BookSlice";

const BookForm = ({ bookToEdit, onCancel }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    if (bookToEdit) {
      setBook(bookToEdit);
    }
  }, [bookToEdit]);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log({ ...book, id: nanoid() });
    //dispatch(addBook({ ...book, id: nanoid() }));

    if (bookToEdit) {
      // update book dispatch
      dispatch(updateBook(book))
    } else {
      dispatch(addBook({ ...book, id: nanoid() }));
    }
    // reset book
    setBook({
      title: "",
      author: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={book.title}
          onChange={handleInput}
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleInput}
          required
        />
        <br />
        <br />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={book.price}
          onChange={handleInput}
          required
        />
        <br />
        <br />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={book.quantity}
          onChange={handleInput}
          required
        />
        <br />
        <br />
        <button type="submit">{bookToEdit ? "Update Book" : "Add Book"}</button>
        {bookToEdit && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default BookForm;

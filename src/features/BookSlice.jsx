/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, title: "x", author: "dipjoy", price: 100, quantity: 10 },

    { id: 2, title: "y", author: "john", price: 150, quantity: 15 },

    { id: 3, title: "z", author: "farhan", price: 120, quantity: 13 },
  ],
};

export const BookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    deleteBook: (state, action) => {
      const id = action.payload;
      console.log(id);
      state.books = state.books.filter((book) => {
        return book.id !== id;
      });
    },
    updateBook: (state, action) => {
      const { id, title, author, price, quantity } = action.payload;
      //console.log(id);
      const existingBook = state.books.find((book) => book.id === id);
      if (existingBook) {
        existingBook.title = title;
        existingBook.author = author;
        existingBook.price = price;
        existingBook.quantity = quantity;
      }
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { deleteBook, addBook , updateBook} = BookSlice.actions;

/* eslint-disable no-unused-vars */
import { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

const App = () => {
  const [bookToEdit, setBookToEdit] = useState(null); //state lifting
  const handleEdit = (book) => {
    setBookToEdit(book);
  };

  const handleCancelEdit = (book) => {
    setBookToEdit(null);
  };

  return (
    <div className="App">
      <BookForm bookToEdit={bookToEdit} onCancel={handleCancelEdit} />
      <BookList onHandleEdit={handleEdit} />
    </div>
  );
};

export default App;

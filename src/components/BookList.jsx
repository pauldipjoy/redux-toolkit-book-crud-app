import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../features/BookSlice";

// eslint-disable-next-line react/prop-types
const BookList = ({ onHandleEdit }) => {
  const { books } = useSelector((state) => state.bookSlice);

  const dispatch = useDispatch();

  const handleEdit = (book) => {
    onHandleEdit(book);
  };

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <h2>List of Books</h2>
      {books && books.length > 0 ? (
        <ul>
          {books.map((book) => {
            return (
              <li key={book.id}>
                {book.title} by {book.author} - ${book.price} - {book.quantity}
                pice
                <button onClick={() => handleEdit(book)}>Edit</button>
                <button type="button" onClick={() => handleDelete(book.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There are no book exist</p>
      )}
    </div>
  );
};

export default BookList;

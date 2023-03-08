import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import AddBookForm from '../components/Form';
import { removeBook } from '../redux/books/booksSlice';

function Books() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <Book
            key={book.itemId}
            itemId={book.itemId}
            title={book.title}
            author={book.author}
            handleRemoveBook={handleRemoveBook}
          />
        ))}
      </ul>

      <AddBookForm />

    </div>
  );
}

export default Books;

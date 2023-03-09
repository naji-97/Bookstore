import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from '../components/Book';
import AddBookForm from '../components/Form';
import {
  loadAllBooks, geStatus, loadBooks,
} from '../redux/books/booksSlice';

function Books() {
  const dispatch = useDispatch();
  const books = useSelector(loadAllBooks);
  const status = useSelector(geStatus);

  useEffect(() => {
    if (status === false) {
      dispatch(loadBooks());
    }
  }, [dispatch, status]);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>

      <AddBookForm />

    </div>
  );
}

export default Books;

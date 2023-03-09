import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync, removeBook } from '../redux/books/booksSlice';
import Button from './Button';

function Book({
  id, title, author,
}) {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeBookAsync(id));
    dispatch(removeBook(id));
  };

  return (
    <li>
      <h4>
        Title :
        {title}
      </h4>
      <p>
        {' '}
        Author :
        {author}
      </p>
      <Button
        className="remove-btn"
        onClick={remove}
        value="Remove"
      />
    </li>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

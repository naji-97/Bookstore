import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';

function Book({ itemId, title, author }) {
  const dispatch = useDispatch();

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
        onClick={() => {
          dispatch(removeBook(itemId));
        }}
        value="Remove"
      />
    </li>
  );
}

Book.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

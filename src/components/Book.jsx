import React from 'react';
import PropTypes from 'prop-types';

function Book({ id, title, author }) {
  return (
    <>
      <div>
        <ul>

          <li id={id}>
            <h4>
              Title :
              {title}
            </h4>
            <p>
              Author :
              {author}
            </p>
            <button type="button">Remove</button>
          </li>

        </ul>
      </div>

    </>
  );
}
// Book.propTypes = {
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
// };

export default Book;

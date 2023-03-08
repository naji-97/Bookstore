import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import Button from './Button';

function AddBookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    const newItemID = uuidv4();
    dispatch(addBook({ itemId: newItemID, title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Book author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Button type="submit" className="add-btn" value="Add book" />
    </form>
  );
}

export default AddBookForm;

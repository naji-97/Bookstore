import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync, addBook } from '../redux/books/booksSlice';
import Button from './Button';

function AddBookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAuthorChanged = (e) => setAuthor(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      item_id: crypto.randomUUID(),
      title,
      author,
      category: 'Mystery',
    };
    if (title !== '' && author !== '') {
      dispatch(addBook(book));
      dispatch(addBookAsync(book));
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <form action="" method="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        id="text"
        name="text"
        onChange={onTitleChanged}
        className="title"
      />
      <input
        type="text"
        placeholder="Book author"
        value={author}
        onChange={onAuthorChanged}
        id="author"
        name="author"
        className="author"
      />
      <Button type="submit" className="add-btn" value="Add book" />
    </form>
  );
}

export default AddBookForm;

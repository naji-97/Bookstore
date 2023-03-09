import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/i31MDPlgPApO9Y929tb5/books';

const initialState = {
  books: [], // initialize as empty array
  id: '',
  load: false, // add status field
};
// Add Book Async Action
export const addBookAsync = createAsyncThunk('books/postBookApi', async (book) => {
  const res = await axios.post(BASE_URL, book);
  return res.data;
});

export const loadBooks = createAsyncThunk('books/loadBooks', async () => {
  const response = await axios.get(BASE_URL);
  return { ...response.data };
});

export const removeBookAsync = createAsyncThunk('books/removeBookAsync', async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
});

const newBooks = (load) => {
  const keys = Object.keys(load);
  const array = [];
  keys.forEach((key) => {
    array.push({
      item_id: key,
      ...load[key][0],
    });
  });
  return array;
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    removeBook: (state, action) => {
      const filteredBooks = state.books.filter((e) => e.item_id !== action.payload);
      return { ...state, books: filteredBooks };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadBooks.pending, (state) => ({ ...state, load: true }))
      .addCase(loadBooks.fulfilled, (_, action) => {
        const arr = newBooks(action.payload);
        return {
          books: [...arr],
          load: true,
        };
      })
      .addCase(addBookAsync.fulfilled, (state) => ({
        ...state,
      }))
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        const filteredBooks = state.books.filter((book) => book.item_id !== action.payload);
        return { ...state, books: filteredBooks, load: true };
      });
  },

});

export const loadAllBooks = (state) => state.books.books;
export const geStatus = (state) => state.books.load;

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;

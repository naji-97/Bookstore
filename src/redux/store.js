import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const rootReducer = combineReducers({
 books: booksReducer,
 categories: categoriesReducer,
});

const store = configureStore({
 reducer:rootReducer
})

export default store;
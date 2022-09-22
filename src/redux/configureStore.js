import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootStore = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootStore,
});

export default store;

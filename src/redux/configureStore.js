import { configureStore } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootStore = configureStore({
  booksReducer,
  categoriesReducer,
});

export default rootStore;

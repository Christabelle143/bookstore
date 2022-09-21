import { combineReducers, configureStore } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootStore = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = configureStore({
  rootStore,
});
export default store;

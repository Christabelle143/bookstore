// Define action types for adding and removing a book.
import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore / books / ADD_BOOK';
const REMOVE_BOOK = 'bookstore / books / REMOVE_BOOK';
// const APP_ID = 'WLWRGsXNCux9kjlYUIID';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';

const initialState = [];
// Action Creators
const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WLWRGsXNCux9kjlYUIID/books/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(book),
  });
  return book;
});
const fetchBooks = createAsyncThunk(FETCH_BOOKS, async () => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WLWRGsXNCux9kjlYUIID/books/', {
    method: 'GET',
  });
  const data = await response.json();
  const bookIDs = Object.entries(data);
  const books = [];
  bookIDs.forEach(([key, book]) => {
    const id = key;
    const { title, author, category } = book[0];
    books.push({
      id, title, author, category,
    });
  });
  return books;
});

const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WLWRGsXNCux9kjlYUIID/books/${id}`,
    {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    });
  return id;
});
// reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case FETCH_BOOKS:
      return [...action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload)];
    default:
      return state;
  }
};
export default booksReducer;
export { addBook, removeBook, fetchBooks };

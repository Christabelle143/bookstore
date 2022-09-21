// Define action types for adding and removing a book.
const ADD_BOOK = 'bookstore / books / ADD_BOOK';
const REMOVE_BOOK = 'bookstore / books / REMOVE_BOOK';
const initialState = [
    {
        id: 1,
        title: 'THE HUNGER GAMES',
        author: 'Suzanne Collins',
      },
      {
        id: 2,
        title: 'DUNE',
        author: 'Frank Herbert',
      },
      {
        id: 3,
        title: 'Capital in the Twenty-first Century',
        author: 'Suzanne Collins',
      },
];
// Action Creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (index) => ({
  type: REMOVE_BOOK,
  payload: index,
});
// reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((item) => item.id !== action.payload)];
    default:
      return state;
  }
};
export default booksReducer;

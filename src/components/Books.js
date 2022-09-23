/* eslint-disable import/extensions */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './addBook';
import { fetchBooks } from '../redux/books/books';

function Books() {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [bookList, dispatch]);

  return (
    <div>
      {bookList.map((book) => (
        <Book key={book.item_id} title={book.title} author={book.author} id={book.item_id} />
      ))}
      <AddBook />
    </div>
  );
}
Books.defaultProps = {
  books: [],
};
export default Books;

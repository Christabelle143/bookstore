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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const bookList = useSelector((state) => state.books);

  return (
    <>
      <ul>
        {bookList.map((book) => {
          const { author, title, id } = book;
          return <Book key={`bk-${id}`} title={title} author={author} id={id} />;
        })}
      </ul>
      <AddBook />
    </>
  );
}
Books.defaultProps = {
  books: [],
};
export default Books;

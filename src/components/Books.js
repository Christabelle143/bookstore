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
      <div className="book-list">
        <ul>
          {bookList.map((book) => {
            const { author, title, id } = book;
            return <Book key={`bk-${id}`} title={title} author={author} id={id} />;
          })}
        </ul>
        <hr />
        <AddBook />
      </div>
    </>
  );
}
Books.defaultProps = {
  books: [],
};
export default Books;

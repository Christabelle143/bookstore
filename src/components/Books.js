/* eslint-disable import/extensions */
/* eslint-disable react/jsx-first-prop-new-line */
import React from 'react';
/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */
import Book from './components/Book';

function Books(props) {
  const { bookList } = props;
  return (
    <div>
      {bookList.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}
    </div>
  );
}
export default Books;

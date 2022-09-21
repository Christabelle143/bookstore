import React from 'react';
/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */
function Book({ title, author, id }) {
  return (
    <>
      <div className="book">
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        <button type="button" className="remove-btn" value={id}>Remove</button>
      </div>
    </>
  );
}
export default Book;

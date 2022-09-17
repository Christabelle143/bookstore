import React from 'react';
/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */
function Book() {
  return (
    <>
      <div className="book">
        <h2 className="book-title">The Hunger Games</h2>
        <p className="book-author">Suzzane Collins</p>
        <button type="button" className="remove-btn">Remove</button>
      </div>
    </>
  );
}
export default Book;

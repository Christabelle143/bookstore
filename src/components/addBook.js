import React from 'react';

function AddBook() {
  return (
    <div className="form-inputs">
      <h1>ADD A NEW BOOK</h1>
      <form className="inputs">
        <input type="text" id="title" placeholder="Bookk-title" />
        <input type="text" id="author" placeholder="Book-author" />
      </form>
    </div>
  );
}
export default AddBook;

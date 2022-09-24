import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '', author: '', item_id: '', category: 'fiction',
  });

  const submit = (e) => {
    e.preventDefault();
    if (book.title && book.author) {
      dispatch(addBook(book));
      setBook({
        title: '', author: '', item_id: '', category: 'fiction',
      });
    }
  };

  const read = (e) => {
    setBook({
      ...book,
      item_id: uuidv4(),
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="Add-book">
      <h1 className="form-heading">ADD A NEW BOOK</h1>
      <form className="add-form" onSubmit={submit}>
        <input type="text" name="title" placeholder="Book-Title" value={book.title} onChange={read} />
        <input type="text" name="author" placeholder="Book-Author" value={book.author} onChange={read} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddBook;

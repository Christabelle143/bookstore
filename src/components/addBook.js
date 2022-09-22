import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function AddBook() {
  const bookList = useSelector((state) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState({ title: '', author: '' });

  const read = (e) => {
    const input = e.target;
    setState({
      ...state,
      [input.name]: input.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    if (state.title && state.author) {
      let maxID = 0;
      for (let i = 0; i < bookList.books.length; i += 1) {
        if (bookList.books[i].id > maxID) {
          maxID = bookList.books[i].id;
        }
      }

      dispatch(
        addBook({
          id: maxID + 1,
          title: state.title,
          author: state.author,
        }),
      );
      setState({ title: '', author: '' });
    }
  };
  return (
    <div className="form-inputs">
      <h1>ADD A NEW BOOK</h1>
      <form className="inputs" onSubmit={submit}>
        <input type="text" name="title" placeholder="Bookk-title" value={state.title} onChange={read} />
        <input type="text" name="author" placeholder="Book-author" value={state.author} onChange={read} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default AddBook;

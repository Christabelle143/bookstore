import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';
/* eslint-disable react/prop-types */
function Book(props) {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  const deleteBook = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };
  return (
    <>
      <div className="book-item">
        <div>
          <h2 className="book-title">{title}</h2>
          <p className="">{author}</p>
          <div className="links">
            <ul>
              <li><a href="./" className="btn1 line">Comments</a></li>
              <li><a href="./" id={id} className="btn1 line" onClick={deleteBook}>Remove</a></li>
              <li><a href="./" className="btn1 line">Edit</a></li>
            </ul>
          </div>
        </div>
        <div className="progress">
          <CircularProgressbar
            className="progressBar"
            variant="determinate"
            color="primary"
            sx={{
              width: 50,
            }}
            value={50}
          />
          <div className="numerics">
            <span className="percentage">60%</span>
            <span className="completed">completed</span>
          </div>
        </div>
        <div className="view-progress">
          <span className="chapter-title">Current chapter</span>
          <h3 className="chapter-number">Chapter 2</h3>
          <button type="button" className="btn2">
            Update progress
          </button>
        </div>
      </div>
    </>
  );
}
export default Book;

/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { useSelector } from 'react-redux';
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

function App() {
  const state = useSelector((state) => state);
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <div>
            <Routes>
              <Route path="/books" exact element={<Books bookList={state.books} />} />
              <Route path="/categories" element={<Categories categories={state.categories} />} />
            </Routes>
          </div>
        </div>
      </Router>
      ,
    </>
  );
}
export default App;

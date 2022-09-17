/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Book from './components/Book';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <div>
            <Routes>
              <Route path="/book" exact element={<Book />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </div>
        </div>
      </Router>
      ,
    </>
  );
}
export default App;

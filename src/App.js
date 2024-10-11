import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddLivre from './pages/AddLivre';
import EditLivre from './pages/EditLivre';
import DeleteLivre from './pages/DeleteLivre';
import LivreList from './pages/LivreList';
import './App.css';

function App() {
  const [livres, setLivres] = useState([]);

  return (
    <Router>
      <div className="navbar">
        <h1>Book Management Locally With React</h1>
        <div className="nav-links">
          <Link to="/add">Add Book</Link>
          <Link to="/list">Book List</Link>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<LivreList livres={livres} setLivres={setLivres} />} />
          <Route path="/add" element={<AddLivre livres={livres} setLivres={setLivres} />} />
          <Route path="/edit/:index" element={<EditLivre livres={livres} setLivres={setLivres} />} />
          <Route path="/delete/:index" element={<DeleteLivre livres={livres} setLivres={setLivres} />} />
          <Route path="/list" element={<LivreList livres={livres} setLivres={setLivres} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

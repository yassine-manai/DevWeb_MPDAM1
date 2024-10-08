import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import DeleteUser from './pages/DeleteUser';
import UserList from './pages/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <Router>
      <div className="navbar">
        <h1>User Management Locally With React</h1>
        <div className="nav-links">
          <Link to="/add">Add User</Link>
          <Link to="/edit">Edit User</Link>
          <Link to="/delete">Delete User</Link>
          <Link to="/list">User List</Link>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/add" element={<AddUser users={users} setUsers={setUsers} />} />
          <Route path="/edit" element={<EditUser users={users} setUsers={setUsers} />} />
          <Route path="/delete" element={<DeleteUser users={users} setUsers={setUsers} />} />
          <Route path="/list" element={<UserList users={users} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

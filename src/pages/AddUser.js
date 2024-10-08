import React, { useState } from 'react';

function AddUser({ users, setUsers }) {
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const handleAddUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ name: '', email: '' });
  };

  return (
    <div>
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}

export default AddUser;

import React, { useState } from 'react';

function EditUser({ users, setUsers }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({ name: '', email: '' });

  const handleUpdateUser = () => {
    const updatedUsers = [...users];
    updatedUsers[selectedIndex] = updatedUser;
    setUsers(updatedUsers);
    setSelectedIndex(null);
    setUpdatedUser({ name: '', email: '' });
  };

  return (
    <div>
      <h2>Edit User</h2>
      <select onChange={(e) => setSelectedIndex(e.target.value)}>
        <option value="">Select User</option>
        {users.map((user, index) => (
          <option key={index} value={index}>
            {user.name}
          </option>
        ))}
      </select>
      {selectedIndex !== null && (
        <>
          <input
            type="text"
            placeholder="Name"
            value={updatedUser.name}
            onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={updatedUser.email}
            onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
          />
          <button onClick={handleUpdateUser}>Update User</button>
        </>
      )}
    </div>
  );
}

export default EditUser;

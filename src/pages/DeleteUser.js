import React from 'react';

function DeleteUser({ users, setUsers }) {
  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>Delete User</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.email}){' '}
            <button onClick={() => handleDeleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeleteUser;

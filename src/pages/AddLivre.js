import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddLivre({ livres, setLivres }) {
  const [newLivre, setNewLivre] = useState({ title: '', author: '' });
  const navigate = useNavigate();

  const handleAddLivre = () => {
    setLivres([...livres, newLivre]);
    setNewLivre({ title: '', author: '' });
    navigate('/list');
  };

  return (
    <div>
      <h2>Add Book</h2>
      <input
        type="text"
        placeholder="Title"
        value={newLivre.title}
        onChange={(e) => setNewLivre({ ...newLivre, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        value={newLivre.author}
        onChange={(e) => setNewLivre({ ...newLivre, author: e.target.value })}
      />
      <button onClick={handleAddLivre}>Add Book</button>
    </div>
  );
}

export default AddLivre;

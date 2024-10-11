import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditLivre({ livres, setLivres }) {
  const { index } = useParams();
  const navigate = useNavigate();
  const [updatedLivre, setUpdatedLivre] = useState(livres[index] || { title: '', author: '' });

  const handleUpdateLivre = () => {
    const updatedLivres = [...livres];
    updatedLivres[index] = updatedLivre;
    setLivres(updatedLivres);
    navigate('/list');
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <input
        type="text"
        placeholder="Title"
        value={updatedLivre.title}
        onChange={(e) => setUpdatedLivre({ ...updatedLivre, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        value={updatedLivre.author}
        onChange={(e) => setUpdatedLivre({ ...updatedLivre, author: e.target.value })}
      />
      <button onClick={handleUpdateLivre}>Update Book</button>
    </div>
  );
}

export default EditLivre;

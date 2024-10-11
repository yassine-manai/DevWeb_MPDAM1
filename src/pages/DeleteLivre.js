import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteLivre({ livres, setLivres }) {
  const { index } = useParams();
  const navigate = useNavigate();

  const handleDeleteLivre = () => {
    const updatedLivres = livres.filter((_, i) => i !== parseInt(index, 10));
    setLivres(updatedLivres);
    navigate('/list');
  };

  return (
    <div>
      <h2>Delete Book</h2>
      <p>
        Are you sure you want to delete "{livres[index]?.title}" by {livres[index]?.author}?
      </p>
      <button onClick={handleDeleteLivre}>Yes, Delete</button>
    </div>
  );
}

export default DeleteLivre;

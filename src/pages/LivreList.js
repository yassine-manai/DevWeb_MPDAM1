import React from 'react';
import { Link } from 'react-router-dom';

function LivreList({ livres, setLivres }) {
  return (
    <div>
      <h2>Book List</h2> 
      {livres.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {livres.map((livre, index) => (
              <tr key={index}>
                <td>{livre.title}</td>
                <td>{livre.author}</td>
                <td>
                  <Link to={`/edit/${index}`}>
                    <button>Edit</button>
                  </Link>
                  <Link to={`/delete/${index}`}>
                    <button>Delete</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
}

export default LivreList;

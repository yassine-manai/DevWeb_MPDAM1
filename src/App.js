import React, { useState } from 'react';
import './App.css';

function App() {
  // Initial data for books
  const initialBooks = [
    { id: 1, title: 'Atomic Habits', author: 'James Clear' },
    { id: 2, title: 'The slight edge', author: 'Jeff Olsen' },
    { id: 3, title: 'La gloire de mon père', author: 'Marcel Pagnol' },
    { id: 4, title: 'Les misérables', author: 'Victor Hugo' },
  ];

  // State to manage books, editing, and new books
  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [editingBook, setEditingBook] = useState(null);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({ ...prev, [name]: value }));
  };

  // Handle adding a book
  const handleAddBook = () => {
    if (newBook.title && newBook.author) {
      setBooks([...books, { ...newBook, id: books.length + 1 }]);
      setNewBook({ title: '', author: '' });
    }
  };

  // Handle deleting a book
  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Handle editing a book
  const handleEditBook = (id) => {
    const bookToEdit = books.find((book) => book.id === id);
    setEditingBook(bookToEdit);
    setNewBook({ title: bookToEdit.title, author: bookToEdit.author });
  };

  // Handle saving an edited book
  const handleSaveEdit = () => {
    setBooks(
      books.map((book) =>
        book.id === editingBook.id ? { ...editingBook, ...newBook } : book
      )
    );
    setEditingBook(null);
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="App">
      <h1>Application de gestion des livres électroniques</h1>
      
      <div className="book-form">
        <input
          type="text"
          name="title"
          placeholder="Titre du livre"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Auteur du livre"
          value={newBook.author}
          onChange={handleInputChange}
        />
        {editingBook ? (
          <button onClick={handleSaveEdit}>Sauvegarder</button>
        ) : (
          <button onClick={handleAddBook}>Ajouter un livre</button>
        )}
      </div>

      <table className="book-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Éditer</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <button onClick={() => handleEditBook(book.id)} className="edit-btn">
                  Éditer
                </button>
              </td>
              <td>
                <button onClick={() => handleDeleteBook(book.id)} className="delete-btn">
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

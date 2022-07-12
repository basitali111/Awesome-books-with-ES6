import Book from './Book.js';
import UI from './UIClass.js';
// add book event

export default () => {
  document.querySelector('#form-Book').addEventListener('submit',
    (e) => {
    // prevent actual submit
      e.preventDefault();
      // get form values
      const author = document.getElementById('authorname').value;
      const title = document.getElementById('titlename').value;
      // instatiate book
      const book = new Book(author, title);
      // adding book to ui
      UI.addBookToList(book);
      // adding book to store
      UI.addBook(book);
    });
  // remove event
  document.querySelector('#tablebody').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
    UI.removeBook(e.target);
  });
  document.addEventListener('DOMContentLoaded', UI.displayBooks);
};

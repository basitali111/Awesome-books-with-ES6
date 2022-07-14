// ui class:handle the ui interface

export default class UI {
  static displayBooks() {
    const books = UI.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#tablebody');
    const row = document.createElement('tr');
    row.innerHTML = `
          <td>${book.author}</td>
          <td>${book.title}</td>
          <td><input type="button" value="remove" class="delete" ></td>
    
          `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  // local storage
  static getBooks() {
    let books;
    if (localStorage.getItem('books') == null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = UI.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(book) {
    const books = UI.getBooks();
    books.splice(books.indexOf(book), 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
}

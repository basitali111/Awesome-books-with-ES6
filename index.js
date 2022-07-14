import UI from './modules/UIClass.js';
import addBooks from './modules/addBook.js';
import { DateTime } from './modules/luxon.js';

addBooks();
const now = DateTime.now();
let { hour } = now;
if (now.hour > 12) { hour = now.hour - 12; }
let zone = '';
if (now.hour > 11) { zone = 'PM'; } else { zone = 'AM'; }

const dateTime = `${now.day} ${now.monthLong} ${now.year} ${hour}:${now.minute}:${now.second} ${zone}`;
document.getElementById('date').textContent = dateTime;

document.addEventListener('DOMContentLoaded', UI.displayBooks);
// adding navigation buttons
const list = document.querySelector('#list-btn');
const addNew = document.querySelector('#add-btn');
const contacts = document.querySelector('#contact-btn');
const addBook = document.querySelector('#new-book');
const contactForm = document.querySelector('#contact');
const bookSections = document.querySelector('#all-books');

// adding events

list.addEventListener('click', () => {
  addBook.classList.add('inactive');
  contactForm.classList.add('inactive');
  bookSections.classList.remove('inactive');
});

addNew.addEventListener('click', () => {
  addBook.classList.remove('inactive');
  bookSections.classList.add('inactive');
  contactForm.classList.add('inactive');
});

contacts.addEventListener('click', () => {
  contactForm.classList.remove('inactive');
  bookSections.classList.add('inactive');
  addBook.classList.add('inactive');
});

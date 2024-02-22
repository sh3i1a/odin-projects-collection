const books = document.getElementById('books');
const title = document.getElementById('title');
const author = document.getElementById('author');
const genre = document.getElementById('genre');
const submit = document.getElementById('submit');
const form = document.querySelector('form');

const bookList = [];

function renderBooks() {
  books.innerHTML = '';
  bookList.forEach((book) => {
    const newBook = document.createElement('div');
    const newTitle = document.createTextNode(book.title);
    const newAuthor = document.createTextNode(book.author);
    const newGenre = document.createTextNode(book.genre);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      bookList.splice(bookList.indexOf(book), 1);
      renderBooks();
    });

    newBook.appendChild(newTitle);
    newBook.appendChild(newAuthor);
    newBook.appendChild(newGenre);
    books.appendChild(newBook);
    newBook.appendChild(deleteButton);
  });
}

function Book(title, author, genre) {
  this.title = title;
  this.author = author;
  this.genre = genre;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  bookList.unshift(new Book(title.value, author.value, genre.value));
  renderBooks();
});

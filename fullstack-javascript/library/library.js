const books = document.getElementById('books');
const title = document.getElementById('title');
const author = document.getElementById('author');
const submit = document.getElementById('submit');
const status = document.getElementById('status');

const bookList = [];

function renderBooks() {
    books.innerHTML = '';
    bookList.forEach(book => {
        const newBook = document.createElement('div');
        const newTitle = document.createTextNode(book.title);
        const newAuthor = document.createTextNode(book.author);
        const newStatus = document.createTextNode(book.status);
        newBook.appendChild(newTitle);
        newBook.appendChild(newAuthor);
        newBook.appendChild(newStatus);
        books.appendChild(newBook);
    });
}

function Book(title, author, status) {
        this.title = title;
        this.author = author;
        this.status = status;
}

submit.addEventListener('click', () => {
    bookList.push(new Book(title.value, author.value, status.value));
    renderBooks();
});
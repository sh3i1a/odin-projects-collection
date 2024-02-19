const title = document.getElementById('title');
const author = document.getElementById('author');
const submit = document.getElementById('submit');

const bookList = [];

function Book(title, author) {
        this.title = title;
        this.author = author;
}

submit.addEventListener('click', () => {
    bookList.push(new Book(title.value, author.value));
    console.log(bookList);
});
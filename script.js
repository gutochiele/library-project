function Book(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
}

const myLibrary = [];


document.getElementById("add-book").addEventListener("submit", function(event) {
    event.preventDefault();
    addBook(event);
});

function addBook(){
    console.log("addBook function is called");
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    const index = myLibrary.length;

    let addToLibrary = new Book(title, author, pages, read, index);
    myLibrary.push(addToLibrary)
    document.getElementById("add-book").reset();
    addBookCard();
}

function addBookCard(){
    const libraryDisplay = document.getElementById("library-display");
    libraryDisplay.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        const book = myLibrary[i];
        card.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.read ? 'Read' : 'Unread'}</p>`;
        libraryDisplay.appendChild(card);
    }
}
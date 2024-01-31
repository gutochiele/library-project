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
}

class Book {
    constructor(title, author, pages, read, index){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.index = index;
    }
}


// function Book(title, author, pages, read, index) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.index = index;
// }

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
        card.className = "card";
        const book = myLibrary[i];
        card.innerHTML = `
        <div class="card-start"><h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p></div>
        <div class="card-end"><p>Read: ${book.read ? `<input type="checkbox" id="read" checked>` : `<input type="checkbox" id="unread">`}</p>
        <button type="button" class="rmv-btn" data-index="${i}"><i class="material-icons">delete</i></button></div>`    
        ;
        libraryDisplay.insertBefore(card, libraryDisplay.firstChild);
    }
    const removeBtns = document.getElementsByClassName("rmv-btn");
    for (let btn of removeBtns) {
        btn.addEventListener("click", function(){
            const index = this.getAttribute("data-index");
            myLibrary.splice(index, 1); // Remove the book from the library array
            addBookCard(); // Re-render the library display 
        });
    }
}

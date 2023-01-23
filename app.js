function Book (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read =  read;
  this.info = function () {
    return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
  }
}

let newBook = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
console.log(newBook.info());

let myLibrary = ['The Hobbit', 'Lord of The Rings'];

function addBook (book) {
  myLibrary.push(book);
}

let books = document.querySelector('.books');

function display (bookshelf) {
  bookshelf.forEach((book) => {
    let li = document.createElement('li');
    li.innerText = book;
    books.appendChild(li);
  })
}

display(myLibrary)
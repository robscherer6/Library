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

let myLibrary = ['The Hobbit', 'Lord of The Rings', 'Harry Potter'];

function addBook (Title, Author, Pages, Read) {
  let book = new Book(Title, Author, Pages, Read);
  myLibrary.push(book);
}

let books = document.querySelector('.books');

function display (bookshelf) {
  bookshelf.forEach((book) => {
    let newBook = document.createElement('div');
    newBook.innerText = book;
    newBook.classList.add('book');
    books.appendChild(newBook);
  })
}


display(myLibrary)


let btn = document.querySelector('.addBook');
btn.addEventListener('click', function () {

})
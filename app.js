let myLibrary = ['The Hobbit', 'The Fellowship of The Ring', '1984'];

function Book (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
  }
}

function addBookToLibrary (book) {
  myLibrary.push(book);
  return myLibrary;
}

let books = document.getElementById('books');
let str = '<ul>'

myLibrary.forEach(book => {
  str += '<li>' + book + '</li>'
});

str += '</ul>'
books.innerHTML = str;


let addBook = document.querySelector('.addBook');
//console.log('ADD BOOK: ', addBook)
addBook.addEventListener('click', (e) => {
  console.log('button clicked!!!')
})

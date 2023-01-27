function Book (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read =  read;
  this.info = function () {
    return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
  }
}

// let newBook = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
// console.log(newBook.info());

let myLibrary = ['The Hobbit', 'Lord of The Rings', 'Harry Potter'];

function addBook (Title, Author, Pages, Read) {
  let book = new Book(Title, Author, Pages, Read);
  myLibrary.push(book);
}

let books = document.querySelector('.books');

function display (bookshelf) {
  bookshelf.forEach((book) => {
    let card = document.createElement('div');
    card.innerText = book;
    card.classList.add('card');
    books.appendChild(card);
    for (let key in myLibrary) {
      console.log(`${key}: ${myLibrary[key]}`);
      const para = document.createElement('p');
      para.textContent = (`${key}: ${myLibrary[key]}`);
      card.appendChild(para);
    }
  })
}



display(myLibrary)


let btn = document.querySelector('.addBook');
btn.addEventListener('click', function () {

})
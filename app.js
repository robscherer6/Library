function Book (Title, Author, Pages, Read) {
  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.Read =  Read;
  // this.info = function () {
  //   return Title + ' by ' + Author + ', ' + Pages + ' pages, ' + Read;
  // }
}

// let newBook = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
// console.log(newBook.info());

let myLibrary = [];

function addBook (Title, Author, Pages, Read) {
  let book = new Book(Title, Author, Pages, Read);
  myLibrary.push(book);
}


function display () {
  let books = document.querySelector('.books');
  myLibrary.forEach((book) => {
    let card = document.createElement('div');
    card.classList.add('card');
    books.appendChild(card);
    for (let key in book) {
      console.log(`${key}: ${book[key]}`);
      const para = document.createElement('p');
      para.textContent = (`${key}: ${book[key]}`);
      card.appendChild(para);
    }
  })
}

addBook('Lord of The Rings', 'J.R.R. Tolkien', '495 Pages', 'Not Read Yet');
addBook('The Hobbit', 'J.R.R. Tolkien', '295 Pages', 'Read');
addBook('Bourne Legacy', 'Robert Ludlum', '464 Pages', 'Not Read Yet');
addBook('Harry Potter', 'J.K. Rowling', '395 Pages', 'Read');

console.log('myLibrary array contents: ', myLibrary)

display()


let btn = document.querySelector('.addBook');
btn.addEventListener('click', function () {

})
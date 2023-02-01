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
  displayBooks();
}


function displayBooks () {
  let books = document.querySelector('.books');

  //need to remove books currently displayed to prevent duplicates
  let removeDivs = document.querySelectorAll('.card');
  console.log('current books in library: ', removeDivs);
  for (var i = 0; i < removeDivs.length; i++) {
    removeDivs[i].remove();
  }

  let index = 0;
  myLibrary.forEach((book) => {

    let card = document.createElement('div');
    card.classList.add('card');
    books.appendChild(card);

    let removeButton = document.createElement('button');
    removeButton.classList.add('remove-book-button');
    removeButton.textContent = 'Remove Book';

    //adding linkedArray prop with value of index to removeButton (using dataset attribute)
    removeButton.dataset.linkedArray = index;
    index++;
    console.log('show dataset link to array: ', removeButton.dataset.linkedArray);
    card.appendChild(removeButton);

    removeButton.addEventListener('click', removeBook);

    function removeBook() {
      //remove book at index** dataset linkedArray prop
      let bookToRemove = removeButton.dataset.linkedArray;
      console.log('bookToRemove: ', bookToRemove)
      myLibrary.splice((bookToRemove), 1);
      //need to also remove div/node from dom
      card.remove();
      displayBooks();
    }


    //para = paragraph aka content of card
    for (let key in book) {
      console.log(`${key}: ${book[key]}`);
      const para = document.createElement('p');
      para.textContent = (`${key}: ${book[key]}`);
      card.appendChild(para);
      card.appendChild(removeButton)
    }
  })
}



// addBook('Lord of The Rings', 'J.R.R. Tolkien', '495 Pages', 'Not Read Yet');
// addBook('The Hobbit', 'J.R.R. Tolkien', '295 Pages', 'Read');
// addBook('Bourne Legacy', 'Robert Ludlum', '464 Pages', 'Not Read Yet');
// addBook('Harry Potter', 'J.K. Rowling', '395 Pages', 'Read');
// addBook('Harry Potter', 'J.K. Rowling', '395 Pages', 'Read');
// addBook('Harry Potter', 'J.K. Rowling', '395 Pages', 'Read');

console.log('myLibrary array contents: ', myLibrary)


let addBookButton = document.querySelector('.add-book-button');
addBookButton.addEventListener('click', displayForm);

function displayForm() {
  document.getElementById('add-book-form').style.display = '';
}

let submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', intakeFormData);

function intakeFormData() {
  let Title = document.getElementById('Title').value;
  let Author = document.getElementById('Author').value;
  let Pages = document.getElementById('Pages').value;
  let Read = document.getElementById('Read').value;

  //if no book info in form, return
  if((Title === '') || (Author === '') || (Pages === '') || (Read === '')) {
    return;
  }

  //add book from form to library
  addBook(Title, Author, Pages, Read);

  //reset form after submitting book (built in)
  document.getElementById('add-book').reset();

}

let resetFormButton = document.querySelector('.reset-button');
resetFormButton.addEventListener('click', resetForm);

function resetForm() {
  document.getElementById('add-book').reset();
}




/* eslint-disable no-undef */
const myBox = [];

const quoteText = document.querySelector('.quote_text');
const quoteAuthor = document.querySelector('.quote_author');
const addBtn = document.querySelector('.add-btn');

function addQuoteToBox() {
  const quote = prompt('Enter Quote');
  const author = prompt('Author');

  myBox.push(new Quote(quote, author));
  console.log(myBox);
}

function Quote(quote, author) {
  this.quote = quote;
  this.author = author;
}

addBtn.addEventListener('click', addQuoteToBox);

console.log(myBox);

/* eslint-disable no-undef */
const myBox = [];

function Quote(quote, author) {
  this.quote = quote;
  this.author = author;
}

const quoteCardsWrapper = document.querySelector('.quotes_cards-wrapper');
let quoteCard = document.createElement('div');
let quoteText = document.createElement('p');
let quoteAuthor = document.createElement('p');
const addBtn = document.querySelector('.add-btn');

function readBox() {
  for (let i = 0; i < myBox.length; i += 1) {
    quoteCard = document.createElement('div');
    quoteCard.classList.add('quote_card');
    quoteText = document.createElement('p');
    quoteText.classList.add('quote_text');
    quoteAuthor = document.createElement('p');
    quoteAuthor.classList.add('quote_author');
    quoteCardsWrapper.appendChild(quoteCard);
    quoteCard.appendChild(quoteText);
    quoteCard.appendChild(quoteAuthor);
    quoteText.innerText = `${myBox[myBox.length - 1].quote}`;
    quoteAuthor.innerText = `${myBox[myBox.length - 1].author}`;
  }
}

function appendQuotes() {
  quoteCard = document.createElement('div');
  quoteCard.classList.add('quote_card');
  quoteText = document.createElement('p');
  quoteText.classList.add('quote_text');
  quoteAuthor = document.createElement('p');
  quoteAuthor.classList.add('quote_author');
  quoteCardsWrapper.appendChild(quoteCard);
  quoteCard.appendChild(quoteText);
  quoteCard.appendChild(quoteAuthor);
  quoteText.innerText = `${myBox[myBox.length - 1].quote}`;
  quoteAuthor.innerText = `${myBox[myBox.length - 1].author}`;
}

function addQuoteToBox() {
  const quote = prompt('Enter Quote');
  const author = prompt('Author');
  myBox.push(new Quote(quote, author));
  appendQuotes();
  console.log(myBox);
}

readBox();
addBtn.addEventListener('click', addQuoteToBox);

console.log(myBox);

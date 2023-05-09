/* eslint-disable no-undef */

// const myBox = [];

// function Quote(quote, author) {
//   this.quote = quote;
//   this.author = author;
// }

// const mainWrapper = document.querySelector('.main-wrapper');
// const quoteCardsWrapper = document.querySelector('.quotes_cards-wrapper');
// let quoteCard = document.createElement('div');
// let quoteText = document.createElement('p');
// let quoteAuthor = document.createElement('p');
// const addBtn = document.querySelector('.add-btn');

// let quoteForm = document.createElement('form');
// let quoteTextInput = document.createElement('input');
// let quoteAuthorInput = document.createElement('input');
// let quoteSubmitBtn = document.createElement('button');

// function appendQuotes() {
//   quoteCard = document.createElement('div');
//   quoteCard.classList.add('quote_card');
//   quoteText = document.createElement('p');
//   quoteText.classList.add('quote_text');
//   quoteAuthor = document.createElement('p');
//   quoteAuthor.classList.add('quote_author');
//   quoteCardsWrapper.appendChild(quoteCard);
//   quoteCard.appendChild(quoteText);
//   quoteCard.appendChild(quoteAuthor);
//   quoteText.innerText = `${myBox[myBox.length - 1].quote}`;
//   quoteAuthor.innerText = `${myBox[myBox.length - 1].author}`;
// }

// function readBox() {
//   for (let i = 0; i < myBox.length; i += 1) {
//     appendQuotes();
//   }
// }

// function getQuoteFromInput() {
//   // const quote = quoteTextInput.value;
//   // const author = quoteAuthorInput.value;
//   // myBox.push(new Quote(quote, author));
//   // appendQuotes();
//   console.log(myBox);
// }

// function pushQuoteToBox() {
//   quoteForm = document.createElement('form');
//   quoteForm.classList.add('quote-form');
//   mainWrapper.appendChild(quoteForm);
//   quoteTextInput = document.createElement('input');
//   quoteTextInput.setAttribute('id', 'quote_text-input');
//   quoteTextInput.setAttribute('type', 'text');
//   quoteTextInput.setAttribute('name', 'quote_text');
//   quoteForm.appendChild(quoteTextInput);
//   quoteAuthorInput = document.createElement('input');
//   quoteAuthorInput.setAttribute('id', 'quote_author-input');
//   quoteAuthorInput.setAttribute('type', 'text');
//   quoteAuthorInput.setAttribute('name', 'quote_author');
//   quoteForm.appendChild(quoteAuthorInput);
//   quoteSubmitBtn = document.createElement('button');
//   quoteSubmitBtn.setAttribute('type', 'submit');
//   quoteSubmitBtn.innerText = 'Post';
//   quoteForm.appendChild(quoteSubmitBtn);

//   // const quote = quoteTextInput.value;
//   // const author = quoteAuthorInput.value;
//   // myBox.push(new Quote(quote, author));
//   // appendQuotes();
// }

// readBox();
// quoteForm.onsubmit = getQuoteFromInput;
// addBtn.addEventListener('click', pushQuoteToBox);

// // console.log(myBox);
/// //////////////////////////////////////////////////////////////
// const myBox = [
//   {
//     quote: 'no pain, no gain',
//     author: 'me',
//   },
//   {
//     quote: 'no pain, there is gain',
//     author: 'you',
//   },
// ];

// function Quote(quote, author) {
//   this.quote = quote;
//   this.author = author;
// }

// const mainWrapper = document.querySelector('.main-wrapper');
// const quoteCardsWrapper = document.querySelector('.quotes_cards-wrapper');
// let quoteCard = document.createElement('div');
// let quoteText = document.createElement('p');
// let quoteAuthor = document.createElement('p');
// let quoteForm = document.createElement('form');
// let quoteTextInput = document.createElement('input');
// let quoteAuthorInput = document.createElement('input');
// let quoteSubmitBtn = document.createElement('button');
// const addBtn = document.querySelector('.add-btn');
// let quote;
// let author;

// function createQuote() {
//   quoteCard = document.createElement('div');
//   quoteCard.setAttribute('class', 'quote_card');
//   quoteText = document.createElement('p');
//   quoteText.setAttribute('class', 'quote_text');
//   quoteAuthor = document.createElement('p');
//   quoteAuthor.setAttribute('class', 'quote_author');
//   quoteCardsWrapper.appendChild(quoteCard);
//   quoteCard.appendChild(quoteText);
//   quoteCard.appendChild(quoteAuthor);
// }

// function renderBox() {
//   for (let i = 0; i < myBox.length; i += 1) {
//     createQuote();
//     quoteText.innerText = `${myBox[i].quote}`;
//     quoteAuthor.innerText = `${myBox[i].author}`;
//   }
// }

// function displayForm() {
//   quoteForm = document.createElement('form');
//   quoteForm.setAttribute('class', 'quote-form');
//   quoteTextInput = document.createElement('input');
//   quoteTextInput.setAttribute('id', 'quote_text-input');
//   quoteTextInput.setAttribute('type', 'text');
//   quoteTextInput.setAttribute('name', 'quote_text');
//   quoteAuthorInput = document.createElement('input');
//   quoteAuthorInput.setAttribute('id', 'quote_author-input');
//   quoteAuthorInput.setAttribute('type', 'text');
//   quoteAuthorInput.setAttribute('name', 'quote_author');
//   quoteSubmitBtn = document.createElement('button');
//   quoteSubmitBtn.setAttribute('type', 'submit');
//   quoteSubmitBtn.innerText = 'Post';
//   mainWrapper.appendChild(quoteForm);
//   quoteForm.appendChild(quoteTextInput);
//   quoteForm.appendChild(quoteAuthorInput);
//   quoteForm.appendChild(quoteSubmitBtn);
//   quote = quoteTextInput.value;
//   author = quoteAuthorInput.value;
// }

// function addToBox() {
//   // push line should start after submit
//   myBox.push(new Quote(quote, author));
//   renderBox();
// }

// renderBox();
// addBtn.addEventListener('click', displayForm);
// quoteSubmitBtn.addEventListener('submit', addToBox);

//  see the tutrial again
/// //////////////////////////////////////////////////////////////
const quotes = document.querySelector('.quotes_cards-wrapper');
const addBtn = document.querySelector('.add-btn');
const newQuoteForm = document.querySelector('#new-quote-form');

const myBox = [
  // {
  //   body: 'no pain, no gain',
  //   author: 'me',
  //   fav: false,
  // },
  // {
  //   body: 'no pain, there is gain',
  //   author: 'you',
  //   fav: true,
  // },
  // {
  //   body: 'no ohhhhhhhhhhhh, there is gain',
  //   author: 'meeeeee',
  //   fav: false,
  // },
  // {
  //   body: 'no pain, there is gain',
  //   author: 'youeeeeee  ',
  //   fav: true,
  // },
];

function Quote(body, author, fav) {
  this.body = body;
  this.author = author;
  this.fav = fav;
}

function addQuoteToBox() {
  const body = document.querySelector('#quote').value;
  const author = document.querySelector('#author').value;
  const fav = document.querySelector('#fav').checked;
  const newQuote = new Quote(body, author, fav);
  myBox.push(newQuote);
  console.log(newQuote);
}

function createQuoteElement(el, content, className) {
  const element = document.createElement(el);
  element.textContent = content;
  element.setAttribute('class', className);
  return element;
}

function createFavElement(quoteItem, quote) {
  const fav = document.createElement('div');
  fav.setAttribute('class', 'quote-fav');

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.addEventListener('click', (e) => {
    if (e.target.checked) {
      quoteItem.setAttribute('class', 'quote_card fav-checked');
      quote.fav = true;
    } else {
      quoteItem.setAttribute('class', 'quote_card fav-unchecked');
      quote.fav = false;
    }
  });
  if (quote.fav) {
    quoteItem.setAttribute('class', 'quote_card fav-checked');
    input.checked = true;
  }
  fav.appendChild(input);
  return fav;
}

function createEditIcon(quote) {
  const editIcon = document.createElement('img');
  editIcon.setAttribute('class', 'edit-icon');
  editIcon.src = './icons/pencil.svg';
  editIcon.addEventListener('click', (e) => {
    console.log('edit icon active');
  });
  return editIcon;
}

function createQuoteItem(quote, index) {
  const quoteItem = document.createElement('div');
  const quoteText = document.createElement('div');
  const rightContent = document.createElement('div');

  quoteItem.setAttribute('id', index);
  quoteItem.setAttribute('key', index);
  quoteItem.setAttribute('class', 'quote_card');
  quoteText.setAttribute('class', 'quote_text');
  rightContent.setAttribute('class', 'right-content');

  quoteItem.appendChild(quoteText);
  quoteText.appendChild(createQuoteElement('p', `${quote.body}`, 'quote-body'));
  quoteText.appendChild(
    createQuoteElement('p', `${quote.author}`, 'quote_author')
  );
  quoteItem.appendChild(rightContent);

  quoteText.appendChild(createFavElement(quoteItem, quote));
  rightContent.appendChild(createEditIcon(quote));
  rightContent.appendChild(createQuoteElement('button', 'x', 'delete'));

  quotes.insertAdjacentElement('afterbegin', quoteItem);
}

function renderBox() {
  quotes.innerHTML = '';
  myBox.map((body, index) => {
    createQuoteItem(body, index);
  });
}

addBtn.addEventListener('click', (e) => {
  newQuoteForm.style.display = 'block';
});

newQuoteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addQuoteToBox();
  console.log(myBox);
  renderBox();
});

renderBox();

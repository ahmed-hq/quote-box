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

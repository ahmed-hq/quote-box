/* eslint-disable no-undef */
const quotes = document.querySelector('.quotes_cards-wrapper');
const addBtn = document.querySelector('.add-btn');
const newQuoteForm = document.querySelector('#new-quote-form');

class Quote {
  constructor(body, author, fav) {
    this.body = body;
    this.author = author;
    this.fav = fav;
  }
}

const myBox = [];

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

function removeQuote(index) {
  myBox.splice(index, 1);
  renderBox();
}

function createQuoteItem(quote, index) {
  const quoteItem = document.createElement('div');
  const quoteText = document.createElement('div');
  const rightContent = document.createElement('div');
  const deleteBtn = createQuoteElement('button', 'x', 'delete');

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
  rightContent.appendChild(deleteBtn);

  quotes.insertAdjacentElement('afterbegin', quoteItem);
}

function renderBox() {
  quotes.innerHTML = '';
  for (let i = 0; i < myBox.length; i++) {
    const quote = myBox[i];

    const index = i;
    const quoteItem = document.createElement('div');
    const quoteText = document.createElement('div');
    const rightContent = document.createElement('div');
    const deleteBtn = createQuoteElement('button', 'x', 'delete');

    quoteItem.setAttribute('id', index);
    quoteItem.setAttribute('key', index);
    quoteItem.setAttribute('class', 'quote_card');
    quoteText.setAttribute('class', 'quote_text');
    rightContent.setAttribute('class', 'right-content');

    quoteItem.appendChild(quoteText);
    quoteText.appendChild(
      createQuoteElement('p', `${quote.body}`, 'quote-body')
    );
    quoteText.appendChild(
      createQuoteElement('p', `${quote.author}`, 'quote_author')
    );
    quoteItem.appendChild(rightContent);

    quoteText.appendChild(createFavElement(quoteItem, quote));
    rightContent.appendChild(createEditIcon(quote));
    rightContent.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', (e) => {
      removeQuote(i);
    });

    quotes.insertAdjacentElement('afterbegin', quoteItem);
  }
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

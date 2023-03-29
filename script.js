const myBox = [];

function Quote(quote, author) {
  this.quote = quote;
  this.author = author;
}

function addQuoteToBox() {
  const quote = prompt('Enter Quote');
  const author = prompt('Author');

  myBox.push(new Quote(quote, author));
  console.log(myBox);
}

// addQuoteToBox();

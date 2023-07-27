function quotes_authors() {
  var quote = new Array();
  quote[0] =
    "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”";
  quote[1] = "“Always forgive your enemies; nothing annoys them so much.”";
  quote[2] = "“We accept the love we think we deserve.”";
  quote[3] =
    "“I am so clever that sometimes I don't understand a single word of what I am saying.”";
  quote[4] =
    "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”";
  quote[5] =
    "“A friend is someone who knows all about you and still loves you.”";
  quote[6] =
    "“If you want to tell people the truth, make them laugh, otherwise they'll kill you.”";

  var author = new Array();
  author[0] = "Maya Angelou";
  author[1] = "Oscar Wilde";
  author[2] = "Stephen Chbosky,";
  author[3] = "Oscar Wilde,";
  author[4] = "Ralph Waldo Emerson";
  author[5] = "Elbert Hubbard";
  author[6] = "George Bernard Shaw";

  quotes_func = Math.floor(Math.random() * quote.length);
  document.getElementById("getQuote").innerHTML = quote[quotes_func];
  document.getElementById("getAuthor").innerHTML = author[quotes_func];
}

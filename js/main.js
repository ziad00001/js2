var arrOfQuotes = [
    {
      click: "“Be yourself; everyone else is already taken.”",
      push: "― Oscar Wilde",
    },
    {
        click:
        "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        push: "― Marilyn Monroe",
    },
    {
        click: "“So many books, so little time.”",
        push: "― Frank Zappa",
    },
    {
        click:
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        push: "― Albert Einstein",
    },]

    
function showQuote() {
    var randomNumber = Math.trunc(Math.random() * arrOfQuotes.length);
    document.getElementById("click").innerHTML = arrOfQuotes[randomNumber].click;
    document.getElementById("push").innerHTML =arrOfQuotes[randomNumber].push;
  }  
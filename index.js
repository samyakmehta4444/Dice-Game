var n1 = Math.floor(Math.random()*6) + 1 ;

var randomDice = "images/dice" + n1 + ".png" ;

document.querySelectorAll("img")[0].setAttribute("src", randomDice);

var n2 = Math.floor(Math.random()*6) + 1 ;

var randomDice = "images/dice" + n2 + ".png" ;

document.querySelectorAll("img")[1].setAttribute("src", randomDice);

if (n1 > n2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins !" ;
}
else if (n1 < n2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins ! 🚩" ;
}
else {
  document.querySelector("h1").innerHTML = "Draw !" ;
}

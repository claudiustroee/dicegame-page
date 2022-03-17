var randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
var randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);

const collection = document.getElementsByClassName("img1");
collection[0].setAttribute("src", `images/dice${randomNumber1}.png`);

const collection2 = document.getElementsByClassName("img2");
collection2[0].setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2){
    var el = document.querySelector("h1").innerHTML = "🚩 Player1 wins!";
} else if (randomNumber1 < randomNumber2){
    var el = document.querySelector("h1").innerHTML = "Player2 wins! 🚩";
} else {
    var el = document.querySelector("h1").innerHTML = "Draw!";
}
var name1;
var name2;
var check1 = 0;
var check2 = 0;

//Player 1

function takeInput1(){
  check1 = 1;
  name1 = prompt("Input your name!").toUpperCase();
  document.querySelector(".player1").innerHTML=name1;
  if (name1.length === 0) {
    name1 = document.querySelector(".player1").innerHTML="Player 1";
  }
return name1;
}
if (check1 === 0){
  name1 = "Player 1";
}

//Player 2

function takeInput2(){
  check2 = 1;
  name2 = prompt("Input your name!").toUpperCase();
  document.querySelector(".player2").innerHTML=name2;
  if (name2.length === 0) {
    name2 = document.querySelector(".player2").innerHTML="Player 2";
  }
  return name2;
}
if (check2 === 0){
  name2 = "Player 2";
}
var imgArray = [];
imgArray[0] =  "images/dice1.png";
imgArray[1] =  "images/dice2.png";
imgArray[2] =  "images/dice3.png";
imgArray[3] =  "images/dice4.png";
imgArray[4] =  "images/dice5.png";
imgArray[5] =  "images/dice6.png";

function randomImage(){
// Player 1 Random image
  var randomNum1 = Math.floor(Math.random() * 6);
  var randomImg1 = imgArray[randomNum1];
  document.querySelector(".img1").setAttribute("src" , randomImg1);

  // Player 2 Random image
  var randomNum2 = Math.floor(Math.random() * 6);
  var randomImg2 = imgArray[randomNum2];
  document.querySelector(".img2").setAttribute("src" , randomImg2);
  // winnig Player
  if (randomNum1 > randomNum2) {
    document.querySelector(".hidden").innerHTML=  name1 + " " + "Won!";
  } else if(randomNum1 < randomNum2) {
    document.querySelector(".hidden").innerHTML= name2 + " "+ "Won!";
  } else{
    document.querySelector(".hidden").innerHTML= "Draw!";
  }
    document.querySelector("h2").classList.add("winner");

}

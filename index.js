var randomNumber1 = Math.floor( 7 * Math.random());
if (randomNumber1 === 0){
  randomNumber1++;
}
var img = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src", img);


var randomNumber2 = Math.floor( 7 * Math.random());
if (randomNumber2 === 0){
  randomNumber2++;
}
var img1 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", img1);

if(img === img1){
  document.querySelector("h1").textContent="Math Draw Refersh Again";
}
else if (img > img1){
  document.querySelector("h1").textContent="Player 1 Wins";
}
else if(img < img1) {
  document.querySelector("h1").textContent="Player 2 Wins";
}

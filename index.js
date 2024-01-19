var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDice="dice"+randomNumber1+".png";
var randomImage="images/"+randomDice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);

if(randomImage>randomImage2){
document.querySelector("h1").innerHTML="🚩 Play 1 Wins !";
}
else if(randomImage2>randomImage){
document.querySelector("h1").innerHTML="Play 2 Wins ! 🚩";
}
else{
document.querySelector("h1").innerHTML="🚩 Draw ! 🚩";
}
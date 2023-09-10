let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// First Dice:
let randomImage="dice" +randomNumber1+".png";
let randomSource="/images/"+randomImage;

// Second Dice:
let randomImageSource2='/images/dice'+randomNumber2+'.png'

let first=document.querySelectorAll('img')[0];
let second=document.querySelectorAll('img')[1];
first.setAttribute('src',randomSource)
second.setAttribute('src',randomImageSource2)
// document.querySelectorAll('img').setAttribute('src'[0],randomSource);


if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML='Player 1 Wins';
}
else if(randomNumber2>randomNumber1){
    document.querySelector('h1').innerHTML='Player 2 Wins';
}
else(
    document.querySelector('h1').innerHTML='Game Draw!'
)
const cookie = document.querySelector('.cookie');
const scoreScore = document.querySelector('.score');
const autoClick = document.querySelector('.autoClick');
const autoButton = document.querySelector('.auto');
const cost = document.querySelector('.cost');


let score = 0;
let autoB = 10;
let autoPrice = 0;


function autoBuy(){
  if(score >= autoB ){

    autoPrice++;
    autoClick.innerHTML = `Auto Click ${autoPrice} `;
   score = autoB - score;
   scoreScore.innerHTML = ` Clicks: ${score} `;
     autoB = autoB + 5;
     cost.innerHTML = `Cost: ${autoB} `;

  }
  else{
    alert("You do not have enought clicks!");
  }
}

function handleClick(){
 score++;
 scoreScore.innerHTML = ` Clicks: ${score} `;


}

cookie.addEventListener('click', handleClick);
autoButton.addEventListener('click', autoBuy);

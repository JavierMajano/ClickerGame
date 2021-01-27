const cookie = document.querySelector('.cookie');
const scoreScore = document.querySelector('.score');
const autoClick = document.querySelector('.autoClick');
const clickMult = document.querySelector('.ClickMultiplier');
const autoButton = document.querySelector('.auto');
const cost = document.querySelector('.cost');
const costMutiplier = document.querySelector('.costMutiplier')
const clickerButton = document.querySelector('.Multiplier');
const highScore = document.querySelector('.highScore');



let score = 0;
let autoB = 100;
let click = 10;
let autoPrice = 0;
let autoClickTrack = 2000;
let clickers = 0;
let clickerTrack = 0;
var highscore = localStorage.getItem(".highScore");

function autoClicker() {

  setInterval(function() {

    cookie.click();
  }, autoClickTrack)
  // autoClickTrack = autoClickTrack - 200;

}

function updateStatus() {
  autoPrice++;
  autoClick.innerHTML = `Auto Click: ${autoPrice} `;
  score = score - autoB;
  scoreScore.innerHTML = ` Clicks: ${score} `;
  autoB = autoB + 50;
  cost.innerHTML = `Cost: ${autoB} `;

}

function autoBuy() {
  if (score >= autoB) {

    updateStatus();
    autoClicker();
  } else {
    alert("You do not have enought clicks!");
  }
}

function clickerMulti() {
  if (score >= click) {

    clickerTrack++;
    clickMult.innerHTML = `Clciker Multiplier ${clickerTrack}x `;
    score = score - click;
    scoreScore.innerHTML = ` Clicks: ${score} `;
    click = click + 10;
    costMutiplier.innerHTML = `Cost: ${click} `;
    clickers++;

  } else {
    alert("You do not have enought clicks!");
  }
}

function handleClick() {
  score++;
  score = score + clickers;
  scoreScore.innerHTML = ` Clicks: ${score} `;
  if (highscore !== null) {
    if (score > highscore) {
      localStorage.setItem("highscore", score);
    }
  } else {
    localStorage.setItem("highscore", score);
  }

}

cookie.addEventListener('click', handleClick);
autoButton.addEventListener('click', autoBuy);
clickerButton.addEventListener('click', clickerMulti);

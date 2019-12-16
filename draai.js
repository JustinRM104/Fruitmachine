let fruitsoorten = ["&#x1F351;", "&#x1F34D;", "&#x1F352;", "&#x1F348;", "&#x1F34B;", "&#x1F34A;"]
let draai = document.getElementById('draai')
let emojis = document.getElementsByClassName('item')
let aantalText = document.getElementById('aantal')
let scoreText = document.getElementById('huidig')
let highText = document.getElementById('highscore')

let aantal = 0
let max = 10
let canPlay = true
let keerGedraaid = 0
let highscore = 0
let score = 0

function random() {
  keerGedraaid = keerGedraaid + 1;
  for (var i = 0; i < emojis.length; i++) {
    emojis[i].innerHTML = fruitsoorten[Math.floor(Math.random() * fruitsoorten.length)];
  }
  if (keerGedraaid == 30) {
    checkWin();
  }
}

function restart() {
  aantal = 0;
  aantalText.innerHTML = `Aantal keer gedraaid: ${aantal} \n Max: ${max}`;
  scoreText.innerHTML = `Huidige score:  ${score}`;
  canPlay = true
}

function restartLoss() {
  aantal = 0;
  score = 0;
  aantalText.innerHTML = `Aantal keer gedraaid: ${aantal} \n Max: ${max}`;
  scoreText.innerHTML = `Huidige score:  ${score}`;
  canPlay = true
}

function checkWin() {
  if (emojis[1].innerHTML == emojis[2].innerHTML && emojis[1].innerHTML == emojis[3].innerHTML) {
    canPlay = false;
    aantalText.innerHTML = "+1 Score!";

    score = score + 1;
    scoreText.innerHTML = `Huidige score:  ${score}`;

    if (score > highscore) {
      highscore = score;
      highText.innerHTML = `Highscore:  ${highscore}`;
    }

    window.setTimeout(restart, 3000);
  }
}

function draaiEmoji() {
  if (aantal == max - 1) {
    aantalText.innerHTML = "GAME OVER!";
    scoreText.innerHTML = "Resetten...";
    window.setTimeout(restartLoss, 3000);
  }
  else if (canPlay) {
    aantal = aantal + 1;
    keerGedraaid = 0;
    aantalText.innerHTML = `Aantal keer gedraaid: ${aantal} <br> Max: ${max}`;
    for(var x=0; x<30; x++) window.setTimeout(random, 2000 / x);
  }
}

draai.addEventListener("click", draaiEmoji);
random()

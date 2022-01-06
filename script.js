let number1 = Math.trunc(Math.random() * 10) + 1;
let number2 = Math.trunc(Math.random() * 10) + 1;
console.log(number1, number2);
let score = 0;
let highScore = 0;

document.querySelector(".number1").textContent = number1;
document.querySelector(".number2").textContent = number2;

const displayNumber1 = function (number) {
  document.querySelector(".number1").textContent = number;
};
const displayNumber2 = function (number) {
  document.querySelector(".number2").textContent = number;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const displaySlogan = function (slogan) {
  document.querySelector(".slogan").textContent = slogan;
};

document.querySelector(".check").addEventListener("click", function () {
  const answer = Number(document.querySelector(".answer").value);
  console.log(answer);

  if (answer === number1 * number2) {
    score++;
    displayScore(score);
    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    number1 = Math.trunc(Math.random() * 10) + 1;
    number2 = Math.trunc(Math.random() * 10) + 1;
    displayNumber1(number1);
    displayNumber2(number2);
    document.querySelector(".answer").value = "";
    displaySlogan("Correctomundo!");
  } else if (!answer) {
    displaySlogan("Type a Number First!");
  } else {
    displayNumber1("?");
    displayNumber2("?");
    document.querySelector(".answer").value = "";
    displaySlogan("Game Over :(");
  }
});

document.querySelector(".restart").addEventListener("click", function () {
  score = 0;
  displayScore(score);
  displaySlogan("Let's Learn Muliplication!");
  number1 = Math.trunc(Math.random() * 10) + 1;
  number2 = Math.trunc(Math.random() * 10) + 1;
  displayNumber1(number1);
  displayNumber2(number2);
});

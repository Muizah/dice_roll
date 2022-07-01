const previewElement = document.getElementById("preview_text");
const dice1ImageElement = document.querySelector("#dice_1");
const dice2ImageElement = document.querySelector("#dice_2");
const buttonElement = document.getElementById("roll_btn");
let number = 1;

buttonElement.addEventListener("click", () => {
  const firstRandNumber = generateRandomNumber();
  const secondRandNumber = generateRandomNumber();
  changeImageDOM(firstRandNumber, dice1ImageElement);
  changeImageDOM(secondRandNumber, dice2ImageElement);
  checkWinner(firstRandNumber, secondRandNumber);
});
// Generate Random Number btw 1-6
function generateRandomNumber() {
  const min = 1;
  const max = 6;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Check Winner and update the preview Text
function checkWinner(number1, number2) {
  let winner;

  if (number1 > number2) {
    winner = 1;
  } else if (number2 > number1) {
    winner = 2;
  } else {
    winner = 0;
  }

  let win_text = "";
  if (winner === 0) {
    win_text = "Draw";
  } else {
    win_text = `Player ${winner} wins.<span class="flag">🚩</span>`;
  }
  previewElement.innerHTML = win_text;
}
// Change the image src to the number generated
function changeImageDOM(number, imageElement) {
  const src = `assets/images/dice${number}.png`;
  imageElement.setAttribute("src", src);
}

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", reset);
let activePlayer = "X";
let round = 0;

function reset() {
  let gameBoard = [r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3];
  for (const i of gameBoard) {
    i.textContent = "";
    i.style.backgroundColor = "dodgerblue";
    i.addEventListener("click", insert);
    activePlayer = "X";
    round = 0;
    document.getElementById("gameBoard").style.display = "block";
    document.querySelector("#winner").style.display = "none";
    document.querySelector("#activePlayer").textContent =
      "It's your turn player 1";
  }
}

const r1c1 = document.getElementById("r1c1");
const r1c2 = document.getElementById("r1c2");
const r1c3 = document.getElementById("r1c3");

const r2c1 = document.getElementById("r2c1");
const r2c2 = document.getElementById("r2c2");
const r2c3 = document.getElementById("r2c3");

const r3c1 = document.getElementById("r3c1");
const r3c2 = document.getElementById("r3c2");
const r3c3 = document.getElementById("r3c3");

function insert(e) {
  if (e.target.textContent == "") {
    e.target.textContent = activePlayer;
    checkWinner();
    if (activePlayer == "O") {
      activePlayer = "X";
      document.querySelector("#activePlayer").textContent =
        "It's your turn player 1";
    } else if (activePlayer == "X") {
      activePlayer = "O";
      document.querySelector("#activePlayer").textContent =
        "It's your turn player 2";
    }
  }
}

function player1Wins() {
  document.querySelector("#winner").style.display = "block";
  document.querySelector("#winner").textContent = "Player 1 is the Winner";
}

function player2Wins() {
  document.querySelector("#winner").style.display = "block";
  document.querySelector("#winner").textContent = "Player 2 is the Winner";
}

function draw() {
    document.querySelector("#winner").style.display = "block";
    document.querySelector("#winner").textContent = "It's a draw.";
  }

function checkWinner() {
  round++;
  if (round == 9) {
    draw();
  }
  if (
    r1c1.textContent == r1c2.textContent &&
    r1c2.textContent == r1c3.textContent &&
    r1c1.textContent != "" &&
    r1c2.textContent != "" &&
    r1c3.textContent != ""
  ) {
    r1c1.style.backgroundColor = "red";
    r1c2.style.backgroundColor = "red";
    r1c3.style.backgroundColor = "red";
    if (activePlayer == "X") {
      player1Wins();
    } else if (activePlayer == "O") {
      player2Wins();
    }
    activePlayer = "";
  }
  if (
    r2c1.textContent == r2c2.textContent &&
    r2c2.textContent == r2c3.textContent &&
    r2c1.textContent != "" &&
    r2c2.textContent != "" &&
    r2c3.textContent != ""
  ) {
    if (activePlayer == "X") {
      player1Wins();
    } else if (activePlayer == "O") {
      player2Wins();
    }
    activePlayer = "";
    r2c1.style.backgroundColor = "red";
    r2c2.style.backgroundColor = "red";
    r2c3.style.backgroundColor = "red";
  }

  if (
    r3c1.textContent == r3c2.textContent &&
    r3c2.textContent == r3c3.textContent &&
    r3c1.textContent != "" &&
    r3c2.textContent != "" &&
    r3c3.textContent != ""
  ) {
    if (activePlayer == "X") {
      player1Wins();
    } else if (activePlayer == "O") {
      player2Wins();
    }
    activePlayer = "";
    r3c1.style.backgroundColor = "red";
    r3c2.style.backgroundColor = "red";
    r3c3.style.backgroundColor = "red";
  }
  if (
    r1c1.textContent == r2c1.textContent &&
    r2c1.textContent == r3c1.textContent &&
    r1c1.textContent != "" &&
    r2c1.textContent != "" &&
    r3c1.textContent != ""
  ) {
    if (activePlayer == "X") {
      player1Wins();
    } else if (activePlayer == "O") {
      player2Wins();
    }
    activePlayer = "";
    r1c1.style.backgroundColor = "red";
    r2c1.style.backgroundColor = "red";
    r3c1.style.backgroundColor = "red";
  }
  if (
    r1c2.textContent == r2c2.textContent &&
    r2c2.textContent == r3c2.textContent &&
    r1c2.textContent != "" &&
    r2c2.textContent != "" &&
    r3c2.textContent != ""
  ) {
    if (activePlayer == "X") {
      player1Wins();
    } else if (activePlayer == "O") {
      player2Wins();
    }
    activePlayer = "";
    r1c2.style.backgroundColor = "red";
    r2c2.style.backgroundColor = "red";
    r3c2.style.backgroundColor = "red";
  }
  if (
    r1c3.textContent == r2c3.textContent &&
    r2c3.textContent == r3c3.textContent &&
    r1c3.textContent != "" &&
    r2c3.textContent != "" &&
    r3c3.textContent != ""
  ) {
    if (activePlayer == "X") {
      player1Wins();
    } else if (activePlayer == "O") {
      player2Wins();
    }
    activePlayer = "";
    r1c3.style.backgroundColor = "red";
    r2c3.style.backgroundColor = "red";
    r3c3.style.backgroundColor = "red";
  }
  if (
    r1c1.textContent == r2c2.textContent &&
    r2c2.textContent == r3c3.textContent &&
    r1c1.textContent != "" &&
    r2c2.textContent != "" &&
    r3c3.textContent != ""
  ) {
    if (activePlayer == "X") {
      player1Wins();
    } else if (activePlayer == "O") {
      player2Wins();
    }
    activePlayer = "";
    r1c1.style.backgroundColor = "red";
    r2c2.style.backgroundColor = "red";
    r3c3.style.backgroundColor = "red";
  }
  if (
    r1c3.textContent == r2c2.textContent &&
    r2c2.textContent == r3c1.textContent &&
    r1c3.textContent != "" &&
    r2c2.textContent != "" &&
    r3c1.textContent != ""
  ) {
    if (activePlayer == "X") {
      player1Wins();
    } else if (activePlayer == "O") {
      player2Wins();
    }
    activePlayer = "";
    r1c3.style.backgroundColor = "red";
    r2c2.style.backgroundColor = "red";
    r3c1.style.backgroundColor = "red";
  }
}

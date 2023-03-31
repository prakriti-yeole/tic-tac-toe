//line 42- use of $sign instead of if-else

let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let msgRef = document.querySelector("#message");
let newgameBtn = document.querySelector("#new-game");
let restartBtn = document.querySelector("#restart");
let wrapper = document.querySelector(".wrapper");
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

let xTurn = true;
let count = 0;

const disableBtns = () => {
  btnRef.forEach((element) => {
    element.disabled = true;

  });
  wrapper.classList.add("hide");
  popupRef.classList.remove("hide");
  newgameBtn.innerText = "play again";
};

const enableBtns = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;

  });
  wrapper.classList.remove("hide");
  popupRef.classList.add("hide");
};

const winFun = (letter) => {
  disableBtns();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};

const drawFunction = () => {
  disableBtns();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};

newgameBtn.addEventListener("click", () => {
  count = 0;
  enableBtns();
});
restartBtn.addEventListener("click", () => {
  count = 0;
  enableBtns();
});

const winChecker = () => {

  for (let i of winningPattern) {

    let [elem1, elem2, elem3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,

    ];

    if (elem1 != "" && elem2 != "" && elem3 != "") {
      if (elem1 == elem2 && elem2 == elem3) {
        winFun(elem1);
      }
    }
  }
};

btnRef.forEach((element) => {
  element.addEventListener("click", () => {

    if (xTurn) {
      xTurn = false;
      element.innerText = "X";
      element.disabled = true;
    } else {
      element.innerText = "O";
      element.disabled = true;
      xTurn = true;
    }

    count += 1;
    if (count == 9) {
      drawFunction();
    }
    winChecker();
  });
});

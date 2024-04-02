document.addEventListener("DOMContentLoaded", () => {
  let outer = document.getElementsByClassName("outer")[0];
  let chance = true;
  let char = "";
  let clicks = 0;
  let arr = Array(9).fill(undefined);
  let result = document.getElementById("winner");
  let reset = document.getElementById("reset");
  let gameOver = false;

  //Logic of the game
  function winner(char) {
    if (arr[0] == char && arr[1] == char && arr[2] == char) {
      result.textContent = `Winner : ${char}`;
      gameOver = true;
      reset.style.display = "block";
    } else if (arr[3] == char && arr[4] == char && arr[5] == char) {
      result.textContent = `Winner : ${char}`;
      gameOver = true;
      reset.style.display = "block";
    } else if (arr[6] == char && arr[7] == char && arr[8] == char) {
      result.textContent = `Winner : ${char}`;
      gameOver = true;
      reset.style.display = "block";
    } else if (arr[0] == char && arr[3] == char && arr[6] == char) {
      result.textContent = `Winner : ${char}`;
      gameOver = true;
      reset.style.display = "block";
    } else if (arr[1] == char && arr[4] == char && arr[7] == char) {
      result.textContent = `Winner : ${char}`;
      gameOver = true;
      reset.style.display = "block";
    } else if (arr[2] == char && arr[5] == char && arr[8] == char) {
      result.textContent = `Winner : ${char}`;
      gameOver = true;
      reset.style.display = "block";
    } else if (arr[0] == char && arr[4] == char && arr[8] == char) {
      result.textContent = `Winner : ${char}`;
      gameOver = true;
      reset.style.display = "block";
    } else if (arr[2] == char && arr[4] == char && arr[6] == char) {
      result.textContent = `Winner : ${char}`;
      gameOver = true;
      reset.style.display = "block";
    } else if (clicks == 9) {
      result.textContent = `Match Tied !`;
      gameOver = true;
      reset.style.display = "block";
    }
  }

  //Mark the cross or round
  outer.addEventListener("click", (event) => {
    if (gameOver) {
      return;
    }
    let cell = event.target;
    let cellNumber = cell.getAttribute("cell-number");
    if (cell.getAttribute("clicked")) {
      return;
    }
    cell.setAttribute("clicked", true);
    if (chance) {
      char = "X";
      cell.classList.add("cross");
    } else {
      char = "O";
      cell.classList.add("round");
    }
    cell.textContent = char;
    chance = !chance;
    clicks++;
    arr[cellNumber] = char;
    winner(char);
  });

  //To reset the game
  reset.addEventListener("click", (event) => {
    window.location.reload();
  });
});

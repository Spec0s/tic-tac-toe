//---------------------------------------Game Board----------------------------------------------//
var gameBoard = (() => {
  var gameboardArr = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
  return {
    gameboardArr
  };
})();
//---------------------------------------Game functions---------------------------------------//
var game = (() => {
  const reset = () => {
    game.handleIncrement(true)
    for (let i = 0; i < boardSquare.length; i++) {
      boardSquare[i].innerHTML = ""
    }
    console.log("Reset done!")
  }
  var btnToStart = document.querySelector(".btn-start-restart")
  var display = document.querySelector(".display-h2")
  var start = false

  const gameStart = () => {
    if (start == false) {
      start = true
      display.innerHTML = "Game start"
      btnToStart.innerHTML = "Reset"
      return game.start = true
    } else if (start == true) {
      game.reset()
      btnToStart.innerHTML = "Start"
      display.innerHTML = "Game reset. Press start"
      start = false
      return game.start = false
    }
  }

  const checkGame = (mark) => {

    if ((boardSquare[0].innerHTML === mark && boardSquare[1].innerHTML === mark && boardSquare[2].innerHTML === mark)
      ||
      (boardSquare[3].innerHTML === mark && boardSquare[4].innerHTML === mark && boardSquare[5].innerHTML === mark)
      ||
      (boardSquare[6].innerHTML === mark && boardSquare[7].innerHTML === mark && boardSquare[8].innerHTML === mark)
      ||
      (boardSquare[0].innerHTML === mark && boardSquare[3].innerHTML === mark && boardSquare[6].innerHTML === mark)
      ||
      (boardSquare[1].innerHTML === mark && boardSquare[4].innerHTML === mark && boardSquare[7].innerHTML === mark)
      ||
      (boardSquare[2].innerHTML === mark && boardSquare[5].innerHTML === mark && boardSquare[8].innerHTML === mark)
      ||
      (boardSquare[0].innerHTML === mark && boardSquare[4].innerHTML === mark && boardSquare[8].innerHTML === mark)
      ||
      (boardSquare[2].innerHTML === mark && boardSquare[4].innerHTML === mark && boardSquare[6].innerHTML === mark)) {
      display.innerHTML = `${mark} player won!`
      game.reset()
    }
    // else if (game.count == 0) {
    //   display.innerHTML = "Game start"
    // }
  };

  var count = 0
  const handleIncrement = (reset) => {
    if (reset === true) {
      count = 0
      return game.count = 0
    } else if (reset === false) {
      return game.count = count++
    }
  };

  return {
    reset, checkGame, handleIncrement, gameStart, count
  }
})();
//---------------------------------------on click function---------------------------------------//
var boardSquare = document.querySelectorAll(".board-div>div")
boardSquare.forEach(square => {
  square.addEventListener("click", function (e) {
    var square = e.target;
    if (square.innerHTML != "") {
      return
    } else if (game.start == true) {
      game.handleIncrement(false)
      square.innerHTML = gameBoard.gameboardArr[game.count]
      game.checkGame("O")
      game.checkGame("X")
      console.log(game.count)
      if (game.count === 8) {
        console.log("It's a tie!")
        game.reset()
      }
    }
  })
})



//   var player((player, tag) => {
//     return {player, tag}

//   })();



// 123 456 789 147 258 369 159 357  
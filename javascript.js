var gameBoard = (() => {
  var gameboardArr = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
  return {
    gameboardArr
  };
})();


//   var player((player, tag) => {
//     return {player, tag}

//   })();

var game = (() => {
  const reset = () => {
    game.handleIncrement(true)
    for (let i = 0; i < boardSquare.length; i++) {
      boardSquare[i].innerHTML = ""
    }

    console.log("done reset")

  }

  const checkGame = (mark) => {
    console.log(mark)
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

      console.log(`${mark} player won!`)
      game.reset()
    }

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
    reset, checkGame, handleIncrement, count
  }
})();



var boardSquare = document.querySelectorAll(".board-div>div")
boardSquare.forEach(square => {
  square.addEventListener("click", function (e) {

    var square = e.target;

    if (square.innerHTML != "") {
      return
    } else {
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





// 123 456 789 147 258 369 159 357  
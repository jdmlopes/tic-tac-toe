const ViewController = (function () {
  const _gameScreen = document.querySelector("#game-screen");
  const _gameOverScreen = document.querySelector("#game-over-screen");
  const _winner = document.querySelector("#winner");
  const _board = document.querySelector("#board");

  const displayBoard = () => {
    _board.textContent = "";
    for (const symbol of Board.getBoard()) {
      const cell = document.createElement("button");
      cell.classList.add("board-cell");
      cell.textContent = symbol;
      _board.appendChild(cell);
    }
  };

  const displayResults = (winner) => {
    _winner.textContent = `${winner} is the winner`;
    //TODO CHANGE SCREEN VISIBILITY
  };

  return { displayBoard, displayResults };
})();

const gameController = (function () {
  let _turnPlayer;
  let _player1;
  let _player2;

  const _switchTurnPlayer = () => {
    if (_turnPlayer === _player1) {
      _turnPlayer = _player2;
    } else if (_turnPlayer === _player2) {
      _turnPlayer = _player1;
    }
  };

  const getTurnPlayer = () => {
    return _turnPlayer;
  };

  const startGame = (
    namePlayer1,
    symbolPlayer1,
    namePlayer2,
    symbolPlayer2
  ) => {
    _player1 = CreatePlayer(namePlayer1, symbolPlayer1);
    _player2 = CreatePlayer(namePlayer2, symbolPlayer2);
    _turnPlayer = _player1;
    Board.emptyBoard();
    //TODO CALL GAME SCREEN DISPLAY METHODS
    ViewController.displayBoard();
  };

  const playTurn = (index) => {
    Board.placeSymbol(_turnPlayer.getSymbol(), index);
    ViewController.displayBoard();
    const winner = Board.checkWinner();
    if (winner) {
      ViewController.displayResults(
        _player1.getSymbol() === winner
          ? _player1.getName()
          : _player2.getName()
      );
      return;
    }
    _switchTurnPlayer();
  };

  return { playTurn, startGame, getTurnPlayer };
})();

const Board = (function () {
  const _board = [];

  const getBoard = () => {
    return _board;
  };

  const emptyBoard = () => {
    _board.splice(0, _board.length);
    for (let i = 0; i < 9; i++) _board.push("");
  };

  const placeSymbol = (symbol, index) => {
    if (index >= _board.length || index < 0) return;
    _board[index] = symbol;
  };

  const checkWinner = () => {
    if (_board.find((symbol) => symbol === "") === undefined) {
      return "tie";
    }

    if (
      _board[0] !== "" &&
      _board[0] === _board[1] &&
      _board[1] === _board[2]
    ) {
      return _board[0];
    }

    if (
      _board[3] !== "" &&
      _board[3] === _board[4] &&
      _board[4] === _board[5]
    ) {
      return _board[3];
    }

    if (
      _board[6] !== "" &&
      _board[6] === _board[7] &&
      _board[7] === _board[8]
    ) {
      return _board[6];
    }

    if (
      _board[0] !== "" &&
      _board[0] === _board[3] &&
      _board[3] === _board[6]
    ) {
      return _board[0];
    }

    if (
      _board[1] !== "" &&
      _board[1] === _board[4] &&
      _board[4] === _board[7]
    ) {
      return _board[1];
    }

    if (
      _board[2] !== "" &&
      _board[2] === _board[5] &&
      _board[5] === _board[8]
    ) {
      return _board[2];
    }

    if (
      _board[0] !== "" &&
      _board[0] === _board[4] &&
      _board[4] === _board[8]
    ) {
      return _board[0];
    }

    if (
      _board[2] !== "" &&
      _board[2] === _board[4] &&
      _board[4] === _board[6]
    ) {
      return _board[2];
    }

    return "";
  };

  return { getBoard, emptyBoard, placeSymbol, checkWinner };
})();

function CreatePlayer(name, symbol) {
  const _name = name;
  const _symbol = symbol;

  const getName = () => {
    return _name;
  };

  const getSymbol = () => {
    return _symbol;
  };
  return { getName, getSymbol };
}

gameController.startGame("player 1", "x", "player 2", "o");
gameController.playTurn(0);
gameController.playTurn(1);
gameController.playTurn(4);
gameController.playTurn(2);
gameController.playTurn(8);

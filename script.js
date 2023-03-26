const ViewController = (function () {
  //TODO
})();

const gameController = (function () {
  let _turnPlayer;
  let _player1;
  let _player2;
  let _winner = "";

  const _switchTurnPlayer = () => {
    if (_turnPlayer === _player1) {
      _turnPlayer = _player2;
    } else if (_turnPlayer === _player2) {
      _turnPlayer = _player1;
    }
  };

  const playTurn = (index) => {
    Board.placeSymbol(_turnPlayer.getSymbol(), index);
    _winner = Board.checkWinner();
    if (_winner) {
      //TODO CALL DISPLAY GAME OVER SCREEN
      return;
    }
    _switchTurnPlayer();
  };

  return { playTurn };
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

    return "segue o baile";
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

Board.emptyBoard();

console.table(Board.getBoard());
console.log(Board.checkWinner());

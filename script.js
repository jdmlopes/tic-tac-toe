const ViewController = (function () {
  //TODO
})();

const gameController = (function () {
  //TODO
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

  return { getBoard, emptyBoard, placeSymbol };
})();

Board.emptyBoard();
Board.placeSymbol("X", 1);
Board.placeSymbol("X", 5);
Board.placeSymbol("O", 0);

console.table(Board.getBoard());

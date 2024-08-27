class SpotBase {
    constructor (color, id) {
        if (new.target === SpotBase) {
            throw new Error("Cannot instantiate abstract class SpotBase")
        }
        this.color = color
        this.id = id
    }
    isOccupied() {}
}

class PieceBase {
    constructor (color, type) {
        if (new.target === SpotBase) {
            throw new Error("Cannot instantiate abstract class SpotBase")
        }
        this.color = color
        this.type = type
    }
    makeMove() {}
}

class Board {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
  }

  displayBoard() {
    throw new Error("displayBoard method must be implemented in a concrete class");
  }

  makeMove(row, col, player) {
    throw new Error("makeMove method must be implemented in a concrete class");
  }

  checkWin(player) {
    throw new Error("checkWin method must be implemented in a concrete class");
  }

  checkDraw() {
    throw new Error("checkDraw method must be implemented in a concrete class");
  }
}
class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
  }

  makeMove(board) {
    throw new Error("makeMove method must be implemented in a concrete class");
  }
}
class Move {
    constructor(fromX, fromY, toX, toY) {
      this.fromX = fromX;
      this.fromY = fromY;
      this.toX = toX;
      this.toY = toY;
      this.isCastling = false; 
      this.capturedPiece = null; 
      this.promotionPiece = null; 
    }
  
    toString() {
      return `(${this.fromX}, ${this.fromY}) -> (${this.toX}, ${this.toY})`;
    }
  }
  
  class Game {
    constructor(board) {
      this.board = board; 
      this.currentPlayer = 'white';
      this.moveHistory = [];
    }
  
    makeMove(move) {
    }
  
    isGameOver() {
      return false;
    }
  
    getWinner() {
      if (this.isGameOver()) {
        return this.currentPlayer === 'white' ? 'black' : 'white';
      }
      return null;
    }
  }

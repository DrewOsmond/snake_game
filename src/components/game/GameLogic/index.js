export default class Game {
  static generateGameBoard() {
    const arr = new Array(30).fill(1);

    return arr.map((_ele, i) => {
      return Game.generateRow(i);
    });
  }

  static generateRow() {
    const arr = new Array(30).fill(1);
    return arr.map((_ele) => {
      return null;
    });
  }

  static startSnake(board) {
    const x = Math.floor(Math.random() * 30);
    const y = Math.floor(Math.random() * 30);
    board[x][y] = "snek";
    console.log(x, y);
  }
}

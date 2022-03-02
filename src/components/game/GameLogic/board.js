import GameLoop from "./gameLoop";

export default class Game {
  constructor() {
    this.board = this.generateGameBoard();
    this.status = true;
    this.travelDirection = this.startRandomDirection();
    this.snake = this.placeSnake();

    console.log(this.travelDirection);
    document.addEventListener("keypress", (e) => {
      console.log(e.code);
    });
  }

  generateGameBoard() {
    const arr = new Array(30).fill(1);

    return arr.map((_ele) => {
      return this.generateRow();
    });
  }

  generateRow() {
    const arr = new Array(30).fill(1);
    return arr.map((_ele) => {
      return "";
    });
  }

  placeSnake() {
    const x = Math.floor(Math.random() * 15 + 4);
    const y = Math.floor(Math.random() * 15 + 4);
    this.board[x][y] = "snek";

    return [[x, y]];
  }

  startRandomDirection() {
    const options = ["up", "right", "down", "left"];
    const randomOption = Math.floor(Math.random() * options.length);

    // return options[randomOption];
    return "up";
  }

  snakeMovement() {
    const move = GameLoop.handleMovement(
      this.board,
      this.travelDirection,
      this.snake
    );

    if (!move) {
      this.status = false;
      return false;
    }
    return true;
  }
}

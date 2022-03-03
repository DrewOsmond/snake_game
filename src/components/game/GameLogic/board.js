import GameLoop from "./gameLoop";

export default class Game {
  constructor() {
    this.board = this.generateGameBoard();
    this.status = true;
    this.travelDirection = this.startRandomDirection();
    this.snake = this.placeSnake();

    this.spawnDot();

    document.addEventListener("keypress", (e) => {
      this.changeDirection(e.key);
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
    return options[randomOption];
  }

  changeDirection(key) {
    switch (key) {
      case "w":
        return (this.travelDirection = "up");
      case "s":
        return (this.travelDirection = "down");
      case "d":
        return (this.travelDirection = "right");
      case "a":
        return (this.travelDirection = "left");
      default:
        return;
    }
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

    const [moved, ateDot] = move;
    if (ateDot) {
      this.spawnDot();
    }
    return true;
  }

  spawnDot() {
    let x = Math.floor(Math.random() * 28) + 1;
    let y = Math.floor(Math.random() * 28) + 1;

    while (this.board[x][y] !== "") {
      y = Math.floor(Math.random() * 28) + 1;
      x = Math.floor(Math.random() * 28) + 1;
    }

    this.board[x][y] = ".";
  }
}

export default class Loop {
  static handleMovement(board, direction, snake) {
    switch (direction) {
      case "up":
        return Loop.up(board, snake);
    }
  }

  static up(board, snake) {
    const snakeHead = snake[0];
    const [x, y] = snakeHead;

    if (!board[x - 1] && board[x - 1] !== "") {
      return false;
    }

    snake.unshift([x - 1, y]);

    const removed = snake.pop();
    board[x - 1][y] = "snek";
    board[x][y] = "";

    return true;
  }

  down() {}

  right() {}

  left() {}
}

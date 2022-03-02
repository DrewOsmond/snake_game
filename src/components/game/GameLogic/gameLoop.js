export default class Loop {
  static handleMovement(board, direction, snake) {
    console.log(direction);
    switch (direction) {
      case "up":
        return Loop.up(board, snake);
      case "down":
        return Loop.down(board, snake);
      case "right":
        return Loop.right(board, snake);
      case "left":
        return Loop.left(board, snake);
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

  static down(board, snake) {
    const snakeHead = snake[0];
    const [x, y] = snakeHead;

    if (!board[x + 1] && board[x + 1] !== "") {
      return false;
    }

    snake.unshift([x + 1, y]);

    snake.pop();
    board[x + 1][y] = "snek";
    board[x][y] = "";

    return true;
  }

  static right(board, snake) {
    const snakeHead = snake[0];
    const [x, y] = snakeHead;

    if (!board[x][y + 1] && board[x][y + 1] !== "") {
      return false;
    }

    snake.unshift([x, y + 1]);

    snake.pop();
    board[x][y + 1] = "snek";
    board[x][y] = "";

    return true;
  }

  static left(board, snake) {
    const snakeHead = snake[0];
    const [x, y] = snakeHead;

    if (!board[x][y - 1] && board[x][y - 1] !== "") {
      return false;
    }

    snake.unshift([x, y - 1]);

    snake.pop();
    board[x][y - 1] = "snek";
    board[x][y] = "";

    return true;
  }
}

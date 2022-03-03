export default class Loop {
  static handleMovement(board, direction, snake) {
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
    const newMove = [x - 1, y];
    const validMove = Loop.validateMove(newMove, board);

    if (validMove) {
      return Loop.makeMove(newMove, snake, board);
    }

    return false;
  }

  static down(board, snake) {
    const snakeHead = snake[0];
    const [x, y] = snakeHead;
    const newMove = [x + 1, y];
    const validMove = Loop.validateMove(newMove, board);
    if (validMove) {
      return Loop.makeMove(newMove, snake, board);
    }

    return false;
  }

  static right(board, snake) {
    const snakeHead = snake[0];
    const [x, y] = snakeHead;
    const newMove = [x, y + 1];

    const validMove = Loop.validateMove(newMove, board);
    if (validMove) {
      return Loop.makeMove(newMove, snake, board);
    }

    return false;
  }

  static left(board, snake) {
    const snakeHead = snake[0];
    const [x, y] = snakeHead;
    const newMove = [x, y - 1];

    const validMove = Loop.validateMove(newMove, board);
    if (validMove) {
      return Loop.makeMove(newMove, snake, board);
    }

    return false;
  }

  static validateMove(moveToPos, board) {
    const [x, y] = moveToPos;
    if (!board[x] && board[x] !== "") return false;
    if (!board[x][y] && board[x][y] !== "") return false;

    const move = board[x][y];

    if (move === "" || move === ".") {
      return true;
    }
    return false;
  }

  static makeMove(moveToPos, snake, board) {
    const [x, y] = moveToPos;
    const pos = board[x][y];
    board[x][y] = "snek";
    snake.unshift([x, y]);
    //return if it's a dot, this means we want our snek to grow
    if (pos === ".") return [true, true];

    const [xToRemove, yToRemove] = snake.pop();
    board[xToRemove][yToRemove] = "";

    return [true];
  }
}

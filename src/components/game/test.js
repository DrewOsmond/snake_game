export default class Game {
  static generateGameBoard() {
    const arr = new Array(500).fill(1);

    return arr.map((_ele, i) => {
      return { place: i, filled: undefined };
    });
  }
}

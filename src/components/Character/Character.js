export class Character {
  constructor() {
    document.addEventListener("keydown", this.handleKeyboardEvents.bind(this));
  }
  size = {
    width: 50,
    height: 50,
  };
  stats = {
    speed: 10,
  };
  coords = {
    posX: 100,
    posY: 100,
  };
  getCoords() {
    return this.coords;
  }
  getStats() {
    return this.stats;
  }
  getSize() {
    return this.size;
  }
  handleKeyboardEvents(event) {
    const { key } = event;
    const shouldMoveUp = (key) =>
      key === "ArrowUp" ||
      key.toLowerCase() === "w" ||
      key.toLowerCase() === "ц";
    const shouldMoveDown = (key) =>
      key === "ArrowDown" ||
      key.toLowerCase() === "s" ||
      key.toLowerCase() === "ы";
    const shouldMoveLeft = (key) =>
      key === "ArrowLeft" ||
      key.toLowerCase() === "s" ||
      key.toLowerCase() === "ы";
    const shouldMoveRight = (key) =>
      key === "ArrowRight" ||
      key.toLowerCase() === "d" ||
      key.toLowerCase() === "в";
    const moveUp = () => (this.coords.posY -= this.speed);
    const moveDown = () => (this.coords.posY += this.speed);
    const moveLeft = () => (this.coords.posX -= this.speed);
    const moveRight = () => (this.coords.posX += this.speed);
    shouldMoveUp
      ? moveUp()
      : shouldMoveDown
      ? moveDown()
      : shouldMoveLeft
      ? moveLeft()
      : shouldMoveRight
      ? moveRight()
      : null;
  }
}

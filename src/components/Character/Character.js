export class Character {
  constructor() {
    document.addEventListener("keydown", this.handleKeyboardEvents.bind(this));
    document.addEventListener(
      "contextmenu",
      function (e) {
        console.log(e);
        e.preventDefault();
        this.handleMouseEvents(e);
      }.bind(this)
    );
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
    const moveUp = () => (this.coords.posY -= this.stats.speed);
    const moveDown = () => (this.coords.posY += this.stats.speed);
    const moveLeft = () => (this.coords.posX -= this.stats.speed);
    const moveRight = () => (this.coords.posX += this.stats.speed);
    console.log(shouldMoveDown);
    console.log(shouldMoveUp);
    console.log(shouldMoveLeft);
    console.log(shouldMoveRight);
    shouldMoveUp(key)
      ? moveUp()
      : shouldMoveDown(key)
      ? moveDown()
      : shouldMoveLeft(key)
      ? moveLeft()
      : shouldMoveRight(key)
      ? moveRight()
      : null;
  }
  handleMouseEvents(e) {
    console.log(e);
    const clickPos = { posX: e.clientX, posY: e.clientY };
    console.log(clickPos);
  }
}

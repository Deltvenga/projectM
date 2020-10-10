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
    this.size = {
      width: 50,
      height: 50,
    };
    this.stats = {
      name: "Player",
      speed: 25,
    };
    this.coords = {
      posX: 100,
      posY: 100,
    };
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
      key.toLowerCase() === "ф" ||
      key.toLowerCase() === "a";
    const shouldMoveRight = (key) =>
      key === "ArrowRight" ||
      key.toLowerCase() === "d" ||
      key.toLowerCase() === "в";
    const moveUp = () => (this.coords.posY -= 1);
    const moveDown = () => (this.coords.posY += 1);
    const moveLeft = () => (this.coords.posX -= 1);
    const moveRight = () => (this.coords.posX += 1);
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
    const clickPos = { posX: e.clientX, posY: e.clientY };
    const isCurrentPosXbigger = this.coords.posX > clickPos.posX;
    const isCurrentPosYbigger = this.coords.posY > clickPos.posY;
    let difInXCoords = isCurrentPosXbigger
      ? this.coords.posX - clickPos.posX
      : clickPos.posX - this.coords.posX;
    let difInYCoords = isCurrentPosYbigger
      ? this.coords.posY - clickPos.posY
      : clickPos.posY - this.coords.posY;
    let pathLength = Math.sqrt(
      Math.pow(difInXCoords, 2) + Math.pow(difInYCoords, 2)
    );
    let numSteps = pathLength / this.stats.speed;
    let stepX = difInXCoords / numSteps;
    let stepY = difInYCoords / numSteps;
    let count = 0;
    while (count <= numSteps) {
      setTimeout(() => {
        isCurrentPosXbigger
          ? (this.coords.posX -= stepX)
          : (this.coords.posX += stepX);
        isCurrentPosYbigger
          ? (this.coords.posY -= stepY)
          : (this.coords.posY += stepY);
      }, count * 10);
      count++;
    }
  }
}

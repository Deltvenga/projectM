import { getAdjustedCeilSize } from "../../helpers/getAdjustedCeilSize";
import { getCeilImgId } from "../../helpers/getCeilImgId";
import { selectors } from "../../config/selectors";
export class Game {
  constructor(character, mainCanvasId, iterfaceCanvasId, map) {
    this.character = character;
    this.mainCanvas = document.querySelector(mainCanvasId);
    this.iterfaceCanvasId = document.querySelector(iterfaceCanvasId);
    this.settings = {
      ceilSize: { width: null, height: null },
      numDisplayedCeils: 10,
    };
    this.map = map;
  }
  init() {
    this.setCeilSize();
    this.gameLoop();
  }
  setCeilSize() {
    this.settings.ceilSize = getAdjustedCeilSize(
      this.mainCanvas,
      this.settings.numDisplayedCeils
    );
  }
  gameLoop() {
    const gameLoop = function () {
      this.drawMap();
      this.drawCharacter();
      window.requestAnimationFrame(gameLoop);
    }.bind(this);
    window.requestAnimationFrame(gameLoop);
  }
  drawMap() {
    const ctx = this.mainCanvas.getContext("2d");
    const { width, height } = this.settings.ceilSize;
    this.map.map((row, rowIndex) => {
      row.map((ceil, ceilIndex) => {
        ctx.drawImage(
          document.querySelector(getCeilImgId(ceil)),
          ceilIndex * width,
          rowIndex * height,
          width,
          height
        );
      });
    });
  }
  drawCharacter() {
    const ctx = this.mainCanvas.getContext("2d");
    const { width, height } = this.character.getSize();
    const { posX, posY } = this.character.getCoords();

    ctx.drawImage(
      document.querySelector(selectors.characterImg),
      posX,
      posY,
      width,
      height
    );
  }
}

import { getAdjustedCeilSize } from "../../helpers/getAdjustedCeilSize";
import { getCeilImgId } from "../../helpers/getCeilImgId";
import { getSize } from "../../helpers/getSize";
import { getStats } from "../../helpers/getStats";
import { getCoords } from "../../helpers/getCoords";
import { selectors } from "../../config/selectors";
import { Enemy } from "../Enemy/Enemy";
export class Game {
  constructor(character, mainCanvasId, interfaceCanvasId, map) {
    this.character = character;
    this.mainCanvas = document.querySelector(mainCanvasId);
    this.interfaceCanvasId = document.querySelector(interfaceCanvasId);
    this.settings = {
      ceilSize: { width: null, height: null },
      numDisplayedCeils: 10,
    };
    this.map = map;
    this.enemyList = [];
  }
  init() {
    this.setCeilSize();
    this.gameLoop();
    document.getElementById("addEnemyBtn");
  }
  addEnemy() {
    const newEnemy = new Enemy("basic");
    this.enemyList = this.enemyList.push(newEnemy);
  }
  setCeilSize() {
    this.settings.ceilSize = getAdjustedCeilSize(
      this.mainCanvas,
      this.settings.numDisplayedCeils
    );
  }
  gameLoop() {
    const gameLoop = function () {
      this.clearCanvas();
      this.drawMap();
      this.drawCharacter();
      this.drawEnemy("basic");
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
    const { width, height } = getSize.call(this.character);
    const { posX, posY } = getCoords.call(this.character);
    ctx.drawImage(
      document.querySelector(selectors.characterImg),
      posX,
      posY,
      width,
      height
    );
    ctx.font = "20px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Player", posX + 0.5 * width, posY - 0.25 * height);
  }
  drawEnemy(type) {
    const ctx = this.mainCanvas.getContext("2d");
    const { width, height } = this.settings.ceilSize;
    const imgSelector = type === "basic" ? selectors.basicEnemyImg : "";
    console.log(imgSelector);
    ctx.drawImage(document.querySelector(imgSelector), 50, 50, 50, 50);
  }
  clearCanvas() {
    const ctx = this.mainCanvas.getContext("2d");
    ctx.clearRect(0, 0, this.mainCanvas.width, this.mainCanvas.height);
  }
}

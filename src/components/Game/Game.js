import { getAdjustedCeilSize } from "../../helpers/getAdjustedCeilSize";
import { getCeilImgId } from "../../helpers/getCeilImgId";
import { getSize } from "../../helpers/getSize";
import { getStats } from "../../helpers/getStats";
import { getCoords } from "../../helpers/getCoords";
import { getType } from "../../helpers/getType";
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
    document
      .getElementById("addEnemyBtn")
      .addEventListener("click", this.addEnemy.bind(this));
  }
  addEnemy() {
    const newEnemy = new Enemy("basic", Math.floor(Math.random() * 10));
    this.enemyList.push(newEnemy);
    console.log(this.enemyList);
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
      this.drawEnemies();
      window.requestAnimationFrame(gameLoop);
    }.bind(this);
    window.requestAnimationFrame(gameLoop);
  }
  drawEnemies() {
    this.enemyList.map((enemy) => this.drawEnemy(enemy));
  }
  drawMap() {
    const { width, height } = this.settings.ceilSize;
    this.map.map((row, rowIndex) => {
      row.map((ceil, ceilIndex) => {
        this.draw(
          getCeilImgId(ceil),
          ceilIndex * width,
          rowIndex * height,
          width,
          height
        );
      });
    });
  }
  drawCharacter() {
    const { posX, posY } = getCoords.call(this.character);
    const { width, height } = getSize.call(this.character);
    const { name } = getStats.call(this.character);
    this.draw(selectors.characterImg, posX, posY, width, height);
    this.fillText(name, posX, posY, width, height);
  }
  drawEnemy(enemy) {
    const type = getType.call(enemy);
    const { width, height } = getSize.call(enemy);
    const { posX, posY } = getCoords.call(enemy);
    const { name, hp } = getStats.call(enemy);
    const imgSelector = type === "basic" ? selectors.basicEnemyImg : "";
    const text = "name:" + name + " " + "hp:" + hp;
    this.draw(imgSelector, posX, posY, width, height);
    this.fillText(text, posX, posY, width, height);
  }
  clearCanvas() {
    const ctx = this.mainCanvas.getContext("2d");
    ctx.clearRect(0, 0, this.mainCanvas.width, this.mainCanvas.height);
  }
  draw(imgSelector, posX, posY, width, height) {
    const ctx = this.mainCanvas.getContext("2d");
    ctx.drawImage(
      document.querySelector(imgSelector),
      posX,
      posY,
      width,
      height
    );
  }
  fillText(text, posX, posY, width, height) {
    const ctx = this.mainCanvas.getContext("2d");
    ctx.font = "20px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(text, posX + 0.5 * width, posY - 0.25 * height);
  }
}

import { getAdjustedCeilSize } from "../../helpers/getAdjustedCeilSize";
import { getCeilImgId } from "../../helpers/getCeilImgId";
export class Game {
  constructor(mainCanvasId, iterfaceCanvasId, map) {
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
    this.drawMap();
  }
  setCeilSize() {
    this.settings.ceilSize = getAdjustedCeilSize(
      this.mainCanvas,
      this.settings.numDisplayedCeils
    );
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
}

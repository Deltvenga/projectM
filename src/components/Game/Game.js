import { getAdjustedCeilSize } from "../../helpers/getAdjustedCeilSize";
export class Game {
  constructor(mainCanvasId, iterfaceCanvasId) {
    this.mainCanvas = document.querySelector(mainCanvasId);
    this.iterfaceCanvasId = document.querySelector(iterfaceCanvasId);
    this.settings = {
      ceilSize: { width: null, height: null },
      numDisplayedCeils: 10,
    };
    this.init();
  }
  init() {
    this.setCeilSize();
  }
  setCeilSize() {
    this.settings.ceilSize = getAdjustedCeilSize(
      this.mainCanvas,
      this.settings.numDisplayedCeils
    );
  }
}

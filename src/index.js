import { selectors } from "./config/selectors";
import { resizeCanvases } from "./helpers/resizeCanvases";
import { Game } from "./components/Game/Game";
document.addEventListener(
  "load",
  resizeCanvases(selectors.mainCanvas, selectors.interfaceCanvas)
);
let myGame = new Game(selectors.mainCanvas, selectors.interfaceCanvas);

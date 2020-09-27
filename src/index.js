import { selectors } from "./config/selectors";
import { resizeCanvases } from "./helpers/resizeCanvases";
import { Game } from "./components/Game/Game";
import { map } from "./config/map";
document.addEventListener(
  "load",
  resizeCanvases(selectors.mainCanvas, selectors.interfaceCanvas)
);
let myGame = new Game(selectors.mainCanvas, selectors.interfaceCanvas, map);
myGame.init();

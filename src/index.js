import { selectors } from "./config/Selectors";
import { resizeCanvases } from "./helpers/resizeCanvases";
document.addEventListener(
  "load",
  resizeCanvases(selectors.mainCanvas, selectors.interfaceCanvas)
);

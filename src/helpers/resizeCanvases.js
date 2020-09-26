import { pipe } from "../utils/pipe";
export const resizeCanvases = (...canvasesSelectors) => {
  pipe(
    (docElem) => {
      return {
        width: docElem.clientWidth,
        height: docElem.clientHeight,
      };
    },
    (screenSize) => {
      canvasesSelectors.map((selector) => {
        let elem = document.querySelector(selector);
        elem.width = screenSize.width;
        elem.height = screenSize.height;
      });
    }
  )(document.documentElement);
};

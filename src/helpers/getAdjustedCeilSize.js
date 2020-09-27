import { pipe } from "../utils/pipe";
import { getElemSize } from "../utils/getElemSize";
export const getAdjustedCeilSize = (canvas, numCeils) =>
  pipe(
    (canvas) => getElemSize(canvas),
    ({ width, height }) => {
      return { width: width / numCeils, height: height / numCeils };
    }
  )(canvas, numCeils);

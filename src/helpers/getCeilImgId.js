import { selectors } from "../config/selectors";
export const getCeilImgId = (type) => {
  return type == 0 ? selectors.grassImg : selectors.wallImg;
};

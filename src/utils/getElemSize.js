export const getElemSize = (el) => {
  let { width, height } = el.getBoundingClientRect();
  return { width, height };
};

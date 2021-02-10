export const BASE_UNIT = 4;

export default Array(80)
  .fill(0)
  .map((_, i) => `${i * BASE_UNIT}px`);

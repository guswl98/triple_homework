export const easeOutExpo = (
  t: number,
  b: number,
  c: number,
  d: number,
): number => {
  return Math.ceil(t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b);
};

const point = (x, y, r, angel) => [
  (x + Math.sin(angel) * r).toFixed(2),
  (y - Math.cos(angel) * r).toFixed(2),
];

const full = (x, y, R, r) => {
  if (r <= 0) {
    return `M ${x - R} ${y} A ${R} ${R} 0 1 1 ${x + R} ${y} A ${R} ${R} 1 1 1 ${x - R} ${y} Z`;
  }
  return `M ${x - R} ${y} A ${R} ${R} 0 1 1 ${x + R} ${y} A ${R} ${R} 1 1 1 ${x - R} ${y} M ${x - r} ${y} A ${r} ${r} 0 1 1 ${x + r} ${y} A ${r} ${r} 1 1 1 ${x - r} ${y} Z`;
};

const part = (x, y, R, r, start, end) => {
  const [s, e] = [(start / 360) * 2 * Math.PI, (end / 360) * 2 * Math.PI];
  const P = [
    point(x, y, r, s),
    point(x, y, R, s),
    point(x, y, R, e),
    point(x, y, r, e),
  ];
  const flag = e - s > Math.PI ? '1' : '0';
  return `M ${P[0][0]} ${P[0][1]} L ${P[1][0]} ${P[1][1]} A ${R} ${R} 0 ${flag} 1 ${P[2][0]} ${P[2][1]} L ${P[3][0]} ${P[3][1]} A ${r} ${r}  0 ${flag} 0 ${P[0][0]} ${P[0][1]} Z`;
};

const arc = (opts = {}) => {
  const { x = 0, y = 0 } = opts;
  let {
    R = 0, r = 0, start, end,
  } = opts;

  [R, r] = [Math.max(R, r), Math.min(R, r)];
  if (R <= 0) return '';
  if (start !== +start || end !== +end) return full(x, y, R, r);
  if (Math.abs(start - end) < 0.000001) return '';
  if (Math.abs(start - end) % 360 < 0.000001) return full(x, y, R, r);

  [start, end] = [start % 360, end % 360];

  if (start > end) end += 360;
  return part(x, y, R, r, start, end);
};

export default arc;

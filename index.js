const point = (x, y, r, angel) => [
  (x + Math.sin(angel) * r).toFixed(2),
  (y - Math.cos(angel) * r).toFixed(2),
];

const full = (x, y, R, r) => {
  if (r <= 0) {
    return `M ${x - R} ${y} A ${R} ${R} 0 1 1 ${x + R} ${y} A ${R} ${R} 1 1 1 ${x - R} ${y} Z`;
  }
  return `M ${x - R} ${y} A ${R} ${R} 0 1 1 ${x + R} ${y} A ${R} ${R} 1 1 1 ${x - R} ${y} 
  M ${x - r} ${y} A ${r} ${r} 0 1 1 ${x + r} ${y} A ${r} ${r} 1 1 1 ${x - r} ${y} Z`;
};

const part = (x, y, R, r, startAngle, endAngle) => {
  const P = [
    point(x, y, r, startAngle),
    point(x, y, R, startAngle),
    point(x, y, R, endAngle),
    point(x, y, r, endAngle),
  ];
  const flag = endAngle - startAngle > Math.PI ? '1' : '0';
  return `M ${P[0][0]} ${P[0][1]} L ${P[1][0]} ${P[1][1]} A ${R} ${R} 0 ${flag} 1 ${P[2][0]} ${P[2][1]} L ${P[3][0]} ${P[3][1]} A ${r} ${r}  0 ${flag} 0 ${P[0][0]} ${P[0][1]} Z`;
};

const annulus = (opts = {}) => {
  const x = opts.x || 0;
  const y = opts.y || x;
  let R = opts.R || 0;
  let r = opts.r || 0;
  [R, r] = [Math.max(R, r), Math.min(R, r)];
  let { start, end } = opts;

  if (R <= 0) return '';
  if (start !== +start || end !== +end) return full(x, y, R, r);
  if (start === end) return '';

  start %= 360;
  end %= 360;
  if (Math.abs(start - end) < 0.000001) return '';
  if (start > end) end += 360;
  return part(x, y, R, r, (start / 360) * 2 * Math.PI, (end / 360) * 2 * Math.PI);
};

export default annulus;

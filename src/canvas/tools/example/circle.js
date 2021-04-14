export function Circle(x, y, dx, dy, radius, ctx) {
  const colorArray = ['#9de0ff', '#57ACE2', '#0072B5', '#254969'];

  const minRadius = radius;
  const maxRadius = radius * 12;
  const color = colorArray[parseInt(Math.random() * colorArray.length)];

  console.log(minRadius);
  console.log(maxRadius);
  console.log(color);

  const draw = () => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
  };

  draw();
}

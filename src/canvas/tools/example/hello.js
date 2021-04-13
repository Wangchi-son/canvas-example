export function Hello(ctx) {
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 150, 60);

  ctx.fillStyle = "yellow";
  ctx.fillRect(5, 5, 140, 50);

  ctx.fillStyle = "red";
  ctx.font = "40px Arial";
  ctx.fillText("Hello", 10, 50);
}

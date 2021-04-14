export function GlobalAlpha(ctx) {
  ctx.globalAlpha = 0.5;

  ctx.font = '20px Arial';
  ctx.strokeStyle = 'black';

  ctx.fillStyle = 'red';
  ctx.fillRect(10, 10, 150, 100);
  ctx.strokeText('red', 20, 50);

  ctx.fillStyle = 'green';
  ctx.fillRect(110, 30, 150, 100);
  ctx.strokeText('green', 120, 80);

  ctx.fillStyle = 'yellow';
  ctx.fillRect(210, 50, 150, 100);
  ctx.strokeText('yellow', 220, 110);

  ctx.fillStyle = 'blue';
  ctx.fillRect(310, 70, 150, 100);
  ctx.strokeText('blue', 320, 140);
}

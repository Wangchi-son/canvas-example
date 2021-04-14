export function Translate(ctx) {
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'black';
  ctx.font = '40px Arial';

  // 1. 첫 번째 직사각형
  ctx.fillRect(0, 5, 150, 40);
  ctx.strokeText('1. Hello', 5, 40);

  // 2. 이동한 두 번째 직사각형
  ctx.translate(125, 50);
  ctx.fillRect(0, 5, 150, 40);
  ctx.strokeText('2. Hello', 5, 40);

  // 3. 이동한 세 번째 직사각형
  ctx.translate(125, 50);
  ctx.fillRect(0, 5, 150, 40);
  ctx.strokeText('3. Hello', 5, 40);
}

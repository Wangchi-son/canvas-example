export function Transform(ctx) {
  ctx.fillStyle = 'red';
  ctx.storkeStyle = 'black';
  ctx.font = '40px Arial';

  ctx.fillRect(0, 5, 150, 40);
  ctx.strokeText('1. Hello', 5, 40);

  // 가로 스케일
  // 가로 왜곡
  // 세로 왜곡
  // 세로 스케일
  // 가로 이동
  // 세로 이동
  // x' = a*x + c*y + e
  // y' = b*x + d*y + f
  ctx.transform(1, 0, -0.2, 1, 200, 40);
  ctx.fillRect(0, 5, 150, 40);
  ctx.strokeText('2. Hello', 5, 40);
}

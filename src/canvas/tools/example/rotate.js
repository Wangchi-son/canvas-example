export function Rotate(ctx) {
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'black';
  ctx.font = '40px Arial';

  // 1. 텍스트가 있는 네모 만들기
  ctx.fillRect(100, 5, 150, 40);
  ctx.strokeText('1. Hello', 105, 40);

  // 2. 회전을 선언하고 같은 직사각형을 다시 그림
  ctx.rotate((30 * Math.PI) / 180);
  ctx.fillRect(100, 5, 150, 40);
  ctx.strokeText('2. Hello', 105, 40);

  // 3. 30도 더 돌아간 직사각형 그림
  ctx.rotate((30 * Math.PI) / 180);
  ctx.fillRect(100, 5, 150, 40);
  ctx.strokeText('3. Hello', 105, 40);
}

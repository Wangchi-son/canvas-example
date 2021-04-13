export function Gradient5(ctx) {
  // 텍스트 스타일 세팅
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineWidth = 2;
  ctx.font = '25px Arial';

  // 상태 A 세팅 (선형 그라디언트)
  // createLinearGradient(첫째 colorStop x 중간값, 첫째 colorStop y 중간값, 둘째 colorStop x 중간값, 둘째 colorStop y 중간값)
  const verticalGrad = ctx.createLinearGradient(0, 200, 0, 350);
  verticalGrad.addColorStop(0, 'red');
  verticalGrad.addColorStop(1, 'green');
  ctx.fillStyle = verticalGrad;
  ctx.strokeStyle = 'yellow';

  // 네모 1 드로잉
  ctx.fillRect(0, 200, 100, 150);
  ctx.strokeText('Fig 1', 50, 225);
  ctx.strokeText('State A', 50, 300);

  // 상태 A 저장
  ctx.save();

  // 상태 B 세팅 (방사형 그라디언트)
  // createRadialGradient(첫째 colorStop x값,y값, 원의 시작 점, 둘째 ==, 원의 끝 점)
  const redGrad = ctx.createRadialGradient(350, 275, 5, 350, 275, 200);
  redGrad.addColorStop(0, 'orange');
  redGrad.addColorStop(1, 'yellow');
  ctx.fillStyle = redGrad;
  ctx.strokeStyle = 'green';

  // 네모 2 드로잉
  ctx.fillRect(150, 200, 100, 150);
  ctx.strokeText('Fig 2', 200, 225);
  ctx.strokeText('State B', 200, 300);

  // 상태 B 저장
  ctx.save();

  // 상태 C 세팅 ()
  ctx.fillStyle = '#888888';
  ctx.strokeStyle = '#EEEEEE';

  // 네모 3 드로잉
  ctx.fillRect(300, 200, 100, 150);
  ctx.strokeText('Fig 3', 350, 225);
  ctx.strokeText('State C', 350, 300);

  // Pop 상태 C 그리고 상태 B 복구
  ctx.restore();

  // 네모 4 드로잉
  ctx.fillRect(450, 200, 100, 150);
  ctx.strokeText('Fig 4', 500, 225);
  ctx.strokeText('State B', 500, 300);

  // Pop 상태 B 그리고 상태 A 복구(restore)
  ctx.restore();

  // 네모 5 드로잉
  ctx.fillRect(600, 200, 100, 150);
  ctx.strokeText('Fig 5', 650, 225);
  ctx.strokeText('State A', 650, 300);
}

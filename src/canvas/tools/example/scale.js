export function Scale(ctx) {
  // 원 1
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 5.0;
  ctx.beginPath();
  ctx.arc(100, 500, 80, 0, Math.PI * 2);
  ctx.stroke();

  // 원 2 (scale 적용)
  ctx.scale(0.8, 1.2);
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 5.0;
  ctx.beginPath();
  ctx.arc(400, 500, 80, 0, Math.PI * 2);
  ctx.stroke();

  //텍스트(좌우 반전) (위의 스케일이 같이 적용 됨 아직 해결방법 못찾음 ㅠ)
  ctx.scale(-1, 1);
  ctx.fillStyle = 'green';
  ctx.fillRect(-175, 600, 150, 60);
  ctx.fillStyle = 'yellow';
  ctx.fillRect(-170, 605, 140, 50);
  ctx.fillStyle = 'green';
  ctx.font = '40pt Arial';
  ctx.fillText('Hello', -100, 635);
}

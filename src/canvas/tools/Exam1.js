import { Hello } from './example/hello';
import { France } from './example/france';
import { Gradient5 } from './example/gradient5';
import { Scale } from './example/scale';
import { Rotate } from './example/rotate';
import { Translate } from './example/translate';
import { Transform } from './example/transform';
import { GlobalAlpha } from './example/globalAlpha';
import { Let1 } from './example/let1';
import { Circle } from './example/circle';

export function Exam1() {
  //
  // canvas 크기 지정
  const canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // 캔버스 context
  const ctx = canvas.getContext('2d');

  // 캔버스 resize
  window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // 값 지정
  const radius = Math.random() * 8 + 1;
  const x = Math.random() * (window.innerWidth - radius * 2) + radius;
  const y = Math.random() * (window.innerHeight = radius * 2) + radius;
  const dx = (Math.random() - 0.5) * 2;
  const dy = (Math.random() - 0.5) * 2;

  // 캔버스 내용
  // Hello(ctx);
  // France(ctx);
  // Gradient5(ctx);
  // Scale(ctx);
  // Rotate(ctx);
  // Translate(ctx);
  // Transform(ctx);
  // GlobalAlpha(ctx);
  Let1(ctx);
  Circle(x, y, dx, dy, radius, ctx);
}

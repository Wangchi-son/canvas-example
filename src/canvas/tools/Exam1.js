import { Hello } from "./example/hello";
import { France } from "./example/france";

export function Exam1() {
  //
  // canvas 크기 지정
  const canvas = document.querySelector("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // 캔버스 context
  const ctx = canvas.getContext("2d");

  // 캔버스 내용
  Hello(ctx);
  France(ctx);
}

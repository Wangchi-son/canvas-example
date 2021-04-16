import React, { useEffect } from 'react';
import './css/canvas.css';
import { Exam1 } from './tools/Exam1';

function Tutorial2() {
  useEffect(() => {
    Exam1();
  });
  return (
    <div id="canvas">
      <canvas></canvas>
    </div>
  );
}

export default Tutorial2;

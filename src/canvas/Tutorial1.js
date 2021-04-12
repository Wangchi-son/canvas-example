import React, { useEffect } from "react";
import "./css/canvas.css";

function Tutorial1() {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(canvas.width);
    console.log(canvas.height);

    const ctx = canvas.getContext("2d");

    // // square
    // ctx.fillStyle = "rgba(255, 0, 0, 0.1)";
    // ctx.fillRect(100, 100, 100, 100);

    // ctx.fillStyle = "rgba(0, 0, 255, 0.1)";
    // ctx.fillRect(400, 100, 100, 100);

    // ctx.fillStyle = "rgba(0, 255, 0, 0.1)";
    // ctx.fillRect(300, 300, 100, 100);

    // // Line
    // ctx.beginPath();
    // ctx.moveTo(50, 300);
    // ctx.lineTo(300, 100);
    // ctx.lineTo(400, 300);

    // ctx.strokeStyle = "#fa34a3";
    // ctx.stroke();

    // for (let i = 0; i < 100; i++) {
    //   const x = Math.random() * window.innerWidth;
    //   const y = Math.random() * window.innerHeight;
    //   const size = parseInt(Math.random() * 100);
    //   ctx.beginPath();
    //   ctx.arc(x, y, size, 0, Math.PI * 2, false);
    //   ctx.strokeStyle = "blue";
    //   ctx.stroke();
    // }

    var x = 200;
    var dx = 4;
    var radius = 30;
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.beginPath();
      ctx.arc(x, 200, 30, 0, Math.PI * 2, false);
      ctx.strokeStyle = "blue";
      ctx.stroke();

      if (x + radius > window.innerWidth || x - radius < 0) {
        dx = -dx;
      }

      x += dx;
    }

    animate();
  });

  return (
    <div>
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default Tutorial1;

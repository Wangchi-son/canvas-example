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

    ctx.fillRect(100, 100, 100, 100);
    ctx.fillRect(400, 100, 100, 100);
    ctx.fillRect(300, 300, 100, 100);

    // Line
    ctx.beginPath();
    ctx.moveTo(50, 300);
    ctx.lineTo(300, 100);
    ctx.lineTo(400, 300);

    ctx.strokeStyle = "#fa34a3";
    ctx.stroke();
  });

  return (
    <div>
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default Tutorial1;

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

    const mouse = {
      x: undefined,
      y: undefined,
    };

    const maxRadius = 40;
    const minRadius = 2;

    const colorArray = [
      "#ffaa33",
      "#99ffaa",
      "#00ff00",
      "#4411aa",
      "#ff1100",
      "#002ee0",
    ];

    window.addEventListener("mousemove", function (e) {
      mouse.x = e.x;
      mouse.y = e.y;
      console.log(mouse);
    });

    function Circle(x, y, dx, dy, radius, color) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.color = colorArray[parseInt(Math.random() * colorArray.length)];

      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      };

      this.update = function () {
        if (
          this.x + this.radius > window.innerWidth ||
          this.x - this.radius < 0
        ) {
          this.dx = -this.dx;
        }

        if (
          this.y + this.radius > window.innerHeight ||
          this.y - this.radius < 0
        ) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        if (
          mouse.x - this.x < 50 &&
          mouse.x - this.x > -50 &&
          mouse.y - this.y < 50 &&
          mouse.y - this.y > -50
        ) {
          if (this.radius < maxRadius) {
            this.radius += 1;
          }
        } else if (this.radius > minRadius) {
          this.radius -= 1;
        }

        this.draw();
      };
    }

    var circleArray = [];

    for (var i = 0; i < 200; i++) {
      var radius = 30;
      var x = Math.random() * (window.innerWidth - radius * 2) + radius;
      var y = Math.random() * (window.innerHeight - radius * 2) + radius;
      var dx = (Math.random() - 0.5) * 2;
      var dy = (Math.random() - 0.5) * 2;

      circleArray.push(new Circle(x, y, dx, dy, radius));
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
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

import React from "react";
import "./css/metaball.css";

function pixiapp() {}

function Metaball() {
  return (
    <div>
      <canvas id="canvas"></canvas>
      <script src="pixi/pixi.min.js"></script>
      <pixiapp />
    </div>
  );
}

export default Metaball;

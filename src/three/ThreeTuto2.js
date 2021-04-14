import React, { Component } from 'react';
import * as THREE from 'three';

export class ThreeTuto2 extends Component {
  componentDidMount() {
    const width = window.innerWidth - 1;
    const height = window.innerHeight - 1;

    // 카메라로 찍으려는 3D무대
    const scene = new THREE.Scene();
    // 카메라
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // 플레이어 or 영사기
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    // 픽셀단위로 진하게 해줌
    renderer.setPixelRatio(devicePixelRatio);

    // HTML canvas
    this.element.appendChild(renderer.domElement);

    // PlanveGeometry
    const planeGeometry = new THREE.PlaneGeometry(5, 5, 1, 1);
    const planeMeterial = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      side: THREE.DoubleSide
    });
    const planeMesh = new THREE.Mesh(planeGeometry, planeMeterial);
    scene.add(planeMesh);

    // 카메라 뷰 깊이
    camera.position.z = 5;

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.planeMesh = planeMesh;
    this.animate();
  }

  // 첫 줄은 카메라 뷰로 렌더링하겠다
  // 다음 두 줄은 3D박스를 x,y축으로 0.01씩 이동하겠다
  // 마지막 requestAnimationFrame 함수는 this.animate함수를 계속 호출하라는 뜻
  // 최대 1ms (1초에 60번씩 그려라) => 성능이 낮은 PC나 CPU/GPU 점유율에 따라 동적으로 변하기도 함

  animate = () => {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  };

  render() {
    return <div ref={(el) => (this.element = el)}></div>;
  }
}

export default ThreeTuto2;

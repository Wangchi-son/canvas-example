import React, { Component } from 'react';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

import * as dat from 'dat.gui';

export class ThreeTuto2 extends Component {
  componentDidMount() {
    const width = window.innerWidth - 1;
    const height = window.innerHeight - 1;

    //raycaster 추가
    const raycaster = new THREE.Raycaster();

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
    const planeGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
    const planeMeterial = new THREE.MeshPhongMaterial({
      color: 0xff0000,
      side: THREE.DoubleSide,
      flatShading: THREE.FlatShading
    });
    const planeMesh = new THREE.Mesh(planeGeometry, planeMeterial);
    scene.add(planeMesh);

    //GUI
    const gui = new dat.GUI();
    const world = {
      plane: {
        width: 10,
        height: 10,
        widthSegments: 10,
        heightSegments: 10
      }
    };

    // x값 조정하는 GUI
    gui.add(world.plane, 'width', 1, 20).onChange(generatePlane);

    // y값 조정하는 GUI
    gui.add(world.plane, 'height', 1, 20).onChange(generatePlane);

    // x seg값 조정하는 GUI
    gui.add(world.plane, 'widthSegments', 1, 100).onChange(generatePlane);

    // y seg값 조정하는 GUI
    gui.add(world.plane, 'heightSegments', 1, 100).onChange(generatePlane);

    function generatePlane() {
      planeMesh.geometry.dispose();
      planeMesh.geometry = new THREE.PlaneGeometry(
        world.plane.width,
        world.plane.height,
        world.plane.widthSegments,
        world.plane.heightSegments
      );
      const { array } = planeMesh.geometry.attributes.position;
      for (let i = 0; i < array.length; i += 3) {
        const x = array[i];
        const y = array[i + 1];
        const z = array[i + 2];

        array[i + 2] = z + Math.random();
      }
    }
    // x,y,z값 조정 방법
    const { array } = planeMesh.geometry.attributes.position;
    for (let i = 0; i < array.length; i += 3) {
      const x = array[i];
      const y = array[i + 1];
      const z = array[i + 2];

      array[i + 2] = z + Math.random();
    }

    // 빛
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 1);
    scene.add(light);

    // 뒤쪽 빛
    const backLight = new THREE.DirectionalLight(0xffffff, 1);
    backLight.position.set(0, 0, -1);
    scene.add(backLight);

    // OrbitControls
    new OrbitControls(camera, renderer.domElement);

    // 카메라 뷰 깊이
    camera.position.z = 5;

    const mouse = {
      x: undefined,
      y: undefined
    };

    window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.planeMesh = planeMesh;

    this.mouse = mouse;
    this.raycaster = raycaster;
    this.animate();
  }

  // 첫 줄은 카메라 뷰로 렌더링하겠다
  // 다음 두 줄은 3D박스를 x,y축으로 0.01씩 이동하겠다
  // 마지막 requestAnimationFrame 함수는 this.animate함수를 계속 호출하라는 뜻
  // 최대 1ms (1초에 60번씩 그려라) => 성능이 낮은 PC나 CPU/GPU 점유율에 따라 동적으로 변하기도 함

  animate = () => {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObject(this.planeMesh);
    if (intersects.length > 0) {
      console.log('intersecting');
    }
  };

  render() {
    // 마우스 무브 움직임 추가

    return <div ref={(el) => (this.element = el)}></div>;
  }
}

export default ThreeTuto2;

import React, { Component } from 'react';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

import * as dat from 'dat.gui';
import gsap from 'gsap';

export class ThreeTuto2 extends Component {
  componentDidMount() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.width = width;
    this.height = height;

    // resize 이벤트
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

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
    //GUI
    const gui = new dat.GUI();
    const world = {
      plane: {
        width: 800,
        height: 800,
        widthSegments: 100,
        heightSegments: 100
      }
    };

    // x값 조정하는 GUI
    gui.add(world.plane, 'width', 100, 600).onChange(generatePlane);

    // y값 조정하는 GUI
    gui.add(world.plane, 'height', 100, 600).onChange(generatePlane);

    // x seg값 조정하는 GUI
    gui.add(world.plane, 'widthSegments', 10, 200).onChange(generatePlane);

    // y seg값 조정하는 GUI
    gui.add(world.plane, 'heightSegments', 10, 200).onChange(generatePlane);
    const randomValue = [];

    function generatePlane() {
      planeMesh.geometry.dispose();
      planeMesh.geometry = new THREE.PlaneGeometry(
        world.plane.width,
        world.plane.height,
        world.plane.widthSegments,
        world.plane.heightSegments
      );

      // x,y,z 값 조정법
      const { array } = planeMesh.geometry.attributes.position;
      for (let i = 0; i < array.length; i++) {
        if (i % 3 === 0) {
          const x = array[i];
          const y = array[i + 1];
          const z = array[i + 2];

          array[i] = x + (Math.random() - 0.5) * 3;
          array[i + 2] = y + (Math.random() - 0.5) * 3;
          array[i + 2] = z + (Math.random() - 0.5) * 3;
        }
        randomValue.push(Math.random() * Math.PI * 3);
      }

      // randomValue 정의
      planeMesh.geometry.attributes.position.randomValue = randomValue;

      // OriginalPosition 정의
      planeMesh.geometry.attributes.position.originalPosition =
        planeMesh.geometry.attributes.position.array;
      const colors = [];
      for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++) {
        // r,g,b
        colors.push(0.05, 0.1, 0.2);
      }

      planeMesh.geometry.setAttribute(
        'color',
        new THREE.BufferAttribute(new Float32Array(colors), 3)
      );
    }

    // PlaneGeometry
    const planeGeometry = new THREE.PlaneGeometry(
      world.plane.width,
      world.plane.height,
      world.plane.widthSegments,
      world.plane.heightSegments
    );
    const planeMeterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      flatShading: THREE.FlatShading,
      vertexColors: true
    });
    const planeMesh = new THREE.Mesh(planeGeometry, planeMeterial);
    scene.add(planeMesh);
    generatePlane();

    // 빛
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, -1, 1);
    scene.add(light);

    // 뒤쪽 빛
    const backLight = new THREE.DirectionalLight(0xffffff, 1);
    backLight.position.set(0, 0, -1);
    scene.add(backLight);

    // OrbitControls
    new OrbitControls(camera, renderer.domElement);

    // 카메라 뷰 깊이
    camera.position.z = 50;
    camera.rotateX(-50);
    camera.rotateY(-50);
    console.log(camera);

    const mouse = {
      x: undefined,
      y: undefined
    };

    window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // frame
    const frame = 0;

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.planeMesh = planeMesh;

    this.mouse = mouse;
    this.raycaster = raycaster;

    this.frame = frame;
    this.randomValue = randomValue;
    this.animate();

    // 클릭 옵션
    document.querySelector('#link').addEventListener('click', (e) => {
      e.preventDefault();
      gsap.to('#container', {
        opacity: 0
      });
      gsap.to(camera.position, {
        x: 75,
        y: -75,
        z: 10,
        duration: 1.2
      });
      gsap.to(camera.rotation, {
        x: 1,
        y: 1,
        duration: 1.2,
        onComplete: () => {
          window.location = '/main';
        }
      });
      gsap.to(light, {
        intensity: 0,
        duration: 1.2
      });
    });
  }

  // 첫 줄은 카메라 뷰로 렌더링하겠다
  // 다음 두 줄은 3D박스를 x,y축으로 0.01씩 이동하겠다
  // 마지막 requestAnimationFrame 함수는 this.animate함수를 계속 호출하라는 뜻
  // 최대 1ms (1초에 60번씩 그려라) => 성능이 낮은 PC나 CPU/GPU 점유율에 따라 동적으로 변하기도 함

  animate = () => {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);

    // 배경 움직임
    this.frame += 0.01;
    const {
      array,
      originalPosition,
      randomValue
    } = this.planeMesh.geometry.attributes.position;

    for (let i = 0; i < array.length; i += 3) {
      // x
      array[i] =
        originalPosition[i] + Math.cos(this.frame + randomValue[i]) * 0.01;

      this.planeMesh.geometry.attributes.position.needsUpdate = true;

      // y
      array[i + 1] =
        originalPosition[i + 1] +
        Math.sin(this.frame + randomValue[i + 1]) * 0.01;

      this.planeMesh.geometry.attributes.position.needsUpdate = true;
    }

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObject(this.planeMesh);
    if (intersects.length > 0) {
      const { color } = intersects[0].object.geometry.attributes;

      // vertice 1
      color.setX(intersects[0].face.a, 0.3);
      color.setY(intersects[0].face.a, 0.6);
      color.setZ(intersects[0].face.a, 1);

      // vertice 2
      color.setX(intersects[0].face.b, 0.3);
      color.setY(intersects[0].face.b, 0.6);
      color.setZ(intersects[0].face.b, 1);

      // vertice 3
      color.setX(intersects[0].face.c, 0.3);
      color.setY(intersects[0].face.c, 0.6);
      color.setZ(intersects[0].face.c, 1);

      color.needsUpdate = true;

      const initialColor = {
        r: 0.05,
        g: 0.1,
        b: 0.2
      };

      const hoverColor = {
        r: 0.3,
        g: 0.6,
        b: 1
      };
      gsap.to(hoverColor, {
        r: initialColor.r,
        g: initialColor.g,
        b: initialColor.b,
        duration: 1,
        onUpdate: () => {
          // vertice 1
          color.setX(intersects[0].face.a, hoverColor.r);
          color.setY(intersects[0].face.a, hoverColor.g);
          color.setZ(intersects[0].face.a, hoverColor.b);

          // vertice 2
          color.setX(intersects[0].face.b, hoverColor.r);
          color.setY(intersects[0].face.b, hoverColor.g);
          color.setZ(intersects[0].face.b, hoverColor.b);

          // vertice 3
          color.setX(intersects[0].face.c, hoverColor.r);
          color.setY(intersects[0].face.c, hoverColor.g);
          color.setZ(intersects[0].face.c, hoverColor.b);
        }
      });
    }
  };

  render() {
    return <div ref={(el) => (this.element = el)}></div>;
  }
}

export default ThreeTuto2;

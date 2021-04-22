import React, { useEffect } from 'react';
import './css/Main.css';
import gsap from 'gsap/gsap-core';

function Main() {
  useEffect(() => {
    // left side
    gsap.to('#profile', {
      opacity: 0.4,
      duration: 1,
      skewX: -15
    });
    document.getElementById('profile').addEventListener('mouseover', () => {
      gsap.to('#profile', {
        opacity: 1
      });
    });
    document.getElementById('profile').addEventListener('mouseout', () => {
      gsap.to('#profile', {
        opacity: 0.4
      });
    });
    document.getElementById('profile').addEventListener('click', () => {
      gsap.to('#profile', {
        onComplete: () => {
          window.location = '/main/#';
        }
      });
    });

    // right side
    gsap.to('#myWork', {
      opacity: 0.4,
      duration: 1,
      skewX: -15
    });
    document.getElementById('myWork').addEventListener('mouseover', () => {
      gsap.to('#myWork', {
        opacity: 1
      });
    });
    document.getElementById('myWork').addEventListener('mouseout', () => {
      gsap.to('#myWork', {
        opacity: 0.4
      });
    });
    document.getElementById('myWork').addEventListener('click', () => {
      gsap.to('#myWork', {
        onComplete: () => {
          window.location = '/main/##';
        }
      });
    });
  });

  return (
    <div id="mainPage">
      <div id="profile">
        <div className="background-image1"></div>
        <div id="leftHover"></div>
      </div>
      <div id="myWork">
        <div className="background-image2"></div>
        <div id="rightHover"></div>
      </div>
    </div>
  );
}

export default Main;

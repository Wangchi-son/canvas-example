import React, { useEffect } from 'react';
import './css/Main.css';
import gsap from 'gsap/gsap-core';

function Main() {
  useEffect(() => {
    gsap.to('#profile', {
      opacity: 0.5,
      duration: 1
    });
    document.getElementById('profile').addEventListener('mouseover', () => {
      gsap.to('#profile', {
        opacity: 1
      });
    });
    document.getElementById('profile').addEventListener('mouseout', () => {
      gsap.to('#profile', {
        opacity: 0.5
      });
    });
  });

  return (
    <div id="mainPage">
      <h1 id="mainTitle">hello</h1>
      <div id="profile">
        <div className="background-image1"></div>
        <div id="hover"></div>
      </div>
      <div id="square"></div>
    </div>
  );
}

export default Main;

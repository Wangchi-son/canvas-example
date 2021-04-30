import React, { useEffect } from 'react';
import Button from './tools/Button';
import './css/Home.css';

import gsap, { TextPlugin } from 'gsap/all';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    // title 효과
    gsap.to('#title', {
      opacity: 1,
      duration: 1,
      delay: 0.2
    });
    for (let i = 1; i < 4; i++) {
      gsap.set(`#title${i}`, {
        y: 500,
        opacity: 0
      });
    }
    gsap.to('#title1', {
      delay: 0,
      duration: 1,
      ease: 'expo.out',
      y: 0,
      opacity: 1
    });
    gsap.to('#title1', {
      text: '',
      delay: 3.8,
      duration: 1,
      opacity: 0
    });
    gsap.to('#title2', {
      delay: 0.4,
      duration: 1,
      ease: 'expo.out',
      y: 0,
      opacity: 1
    });
    gsap.to('#title2', {
      text: "WONJAE'S PORTFOLIO",
      letterSpacing: '14px',
      fontWeight: '500',
      delay: 3.8,
      duration: 1
    });
    gsap.to('#title3', {
      delay: 0.8,
      duration: 1,
      ease: 'expo.out',
      y: 0,
      opacity: 1
    });
    gsap.to('#title3', {
      text: '',
      delay: 3.8,
      duration: 1,
      opacity: 0
    });
    // link 효과
    gsap.set('#link', {
      opacity: 0,
      display: 'none'
    });
    gsap.to('#link', {
      opacity: 1,
      display: 'block',
      duration: 1,
      delay: 3.8
    });
    gsap.to('.disappearBg', {
      opacity: 0,
      delay: 1.8,
      duration: 2
    });
  });

  return (
    <>
      <div className="container" id="container">
        <div className="disappearBg"></div>
        <h1 className="title" id="title">
          <span id="title1">WELCOME</span> &nbsp;
          <span id="title2">MY</span> &nbsp;
          <span id="title3">PORTFOLIO</span>
        </h1>

        <Button />
        <Link to="/main" className="link" id="link">
          Enter
        </Link>
      </div>
    </>
  );
}

export default Home;

import gsap from 'gsap/all';
import React, { useEffect } from 'react';
import ThreeTuto2 from '../three/ThreeTuto2';
import Home from './Home';

function Homepage() {
  useEffect(() => {
    if (document.querySelector('.nx').offsetTop === null) {
      gsap.to('.nx', {
        display: 'none'
      });
    }
  });
  return (
    <>
      <Home />
      <ThreeTuto2 />
      <div className="nx"></div>
    </>
  );
}

export default Homepage;

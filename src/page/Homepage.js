import gsap from 'gsap/all';
import React, { useEffect } from 'react';
import ThreeTuto2 from '../three/ThreeTuto2';
import Home from './Home';

function Homepage() {
  useEffect(() => {});
  return (
    <>
      <Home />
      <div id="text"></div>
      <ThreeTuto2 />
      <div className="nx anc0"></div>
    </>
  );
}

export default Homepage;

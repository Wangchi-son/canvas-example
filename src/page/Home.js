import React, { useEffect } from 'react';
import Button from './Button';
import './css/Home.css';

import gsap from 'gsap';

function Home() {
  useEffect(() => {
    // title 효과
    gsap.to('#title', {
      opacity: 1,
      duration: 3,
      delay: 0.2
    });
    // link 효과
    gsap.to('#link', {
      opacity: 1,
      duration: 3,
      delay: 0.4
    });
  });

  return (
    <>
      <div className="container">
        <Button />
        <h1 className="title" id="title">
          WELCOME MY PORTFOLIO
        </h1>
        <a href="#" className="link" id="link">
          ENTER
        </a>
      </div>
    </>
  );
}

export default Home;

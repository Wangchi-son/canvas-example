import React, { useEffect } from 'react';
import Button from './tools/Button';
import './css/Home.css';

import gsap from 'gsap';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    // title 효과
    gsap.to('#title', {
      opacity: 1,
      duration: 1,
      delay: 0.2
    });
    // link 효과
    gsap.to('#link', {
      opacity: 1,
      duration: 1,
      delay: 0.2
    });
  });

  return (
    <>
      <div className="container" id="container">
        <h1 className="title" id="title">
          WELCOME MY PORTFOLIO
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

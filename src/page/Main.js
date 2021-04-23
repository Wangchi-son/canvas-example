import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Main.css';
import gsap from 'gsap/gsap-core';
import HomeButton from './tools/HomeButton';

import RightSide from './tools/mainPage/rigthSide';
import LeftSide from './tools/mainPage/leftSide';

function Main() {
  useEffect(() => {
    // left side
    LeftSide();
    // right side
    RightSide();
  });

  return (
    <>
      <HomeButton />
      <div id="mainPage">
        <Link to="aboutme" id="profileTitle">
          About me
        </Link>
        <div id="profile">
          <div className="background-image1"></div>
        </div>
        <Link to="mywork" id="myWorkTitle">
          My Work
        </Link>
        <div id="myWork">
          <div className="background-image2"></div>
        </div>
      </div>
    </>
  );
}

export default Main;

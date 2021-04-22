import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Main.css';
import gsap from 'gsap/gsap-core';
import HomeButton from './tools/HomeButton';

function Main() {
  useEffect(() => {
    // left side
    gsap.to('#profile', {
      opacity: 0.3,
      duration: 1,
      skewX: -15
    });
    document.getElementById('profile').addEventListener('mouseover', () => {
      gsap.to('#profile', {
        opacity: 0.7
      });
    });
    document.getElementById('profile').addEventListener('mouseout', () => {
      gsap.to('#profile', {
        opacity: 0.3
      });
    });
    document.getElementById('profile').addEventListener('click', () => {
      gsap.to('#profile', {
        onComplete: () => {
          window.location = '/aboutme';
        }
      });
    });

    // right side
    gsap.to('#myWork', {
      opacity: 0.3,
      duration: 1,
      skewX: -15
    });
    document.getElementById('myWork').addEventListener('mouseover', () => {
      gsap.to('#myWork', {
        opacity: 0.7
      });
    });
    document.getElementById('myWork').addEventListener('mouseout', () => {
      gsap.to('#myWork', {
        opacity: 0.3
      });
    });
    document.getElementById('myWork').addEventListener('click', () => {
      gsap.to('#myWork', {
        onComplete: () => {
          window.location = '/mywork';
        }
      });
    });
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

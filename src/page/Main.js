import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Main.css';
import gsap from 'gsap/gsap-core';
import HomeButton from './tools/HomeButton';

function Main() {
  useEffect(() => {
    console.log(document.getElementsByClassName('background-image1'));
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
      gsap.to('.background-image1', {
        height: '130%'
      });
    });
    document.getElementById('profile').addEventListener('mouseout', () => {
      gsap.to('#profile', {
        opacity: 0.3
      });
      gsap.to('.background-image1', {
        height: '100%'
      });
    });
    document.getElementById('profile').addEventListener('click', () => {
      gsap.to('.background-image1', {
        height: '100%',
        duration: 0.6
      });
      gsap.to('#profile', {
        opacity: 0,
        x: -2000,
        delay: 0.6,
        duration: 1.4,
        onComplete: () => {
          window.location = '/aboutme';
        }
      });
      gsap.to('#myWork', {
        x: 2000,
        delay: 0.6,
        duration: 1.4
      });
      gsap.to('#profileTitle', {
        color: 'rgb(0,0,0)',
        borderColor: 'rgb(0,0,0)',
        delay: 0.6,
        duration: 1.4
      });
      gsap.to('#myWorkTitle', {
        color: 'rgb(0,0,0)',
        borderColor: 'rgb(0,0,0)',
        delay: 0.6,
        duration: 1.4
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
      gsap.to('.background-image2', {
        height: '130%'
      });
    });
    document.getElementById('myWork').addEventListener('mouseout', () => {
      gsap.to('#myWork', {
        opacity: 0.3
      });
      gsap.to('.background-image2', {
        height: '100%'
      });
    });
    document.getElementById('myWork').addEventListener('click', () => {
      gsap.to('.background-image2', {
        height: '100%',
        duration: 0.6
      });
      gsap.to('#myWork', {
        opacity: 0,
        x: 2000,
        delay: 0.6,
        duration: 1.4,
        onComplete: () => {
          window.location = '/mywork';
        }
      });
      gsap.to('#profile', {
        x: -2000,
        delay: 0.6,
        duration: 1.4
      });
      gsap.to('#profileTitle', {
        color: 'rgb(0,0,0)',
        borderColor: 'rgb(0,0,0)',
        delay: 0.6,
        duration: 1.4
      });
      gsap.to('#myWorkTitle', {
        color: 'rgb(0,0,0)',
        borderColor: 'rgb(0,0,0)',
        delay: 0.6,
        duration: 1.4
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

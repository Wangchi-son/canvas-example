import gsap, { ScrollTrigger, ScrollToPlugin, TextPlugin } from 'gsap/all';
import React, { useEffect, useState } from 'react';

import './css/AboutMe.css';
import HomeButton from './tools/HomeButton';

import Motivation from '../static/images/motivation.jpg';

function AboutMe() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

    // anchor 옵션
    const panelsSection = document.querySelector('.overX');
    const panelsContainer = document.querySelector('.row');

    document.querySelectorAll('.anchor').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElem = document.querySelector(
          e.target.getAttribute('href')
        );
        if (
          targetElem &&
          panelsContainer.isSameNode(targetElem.parentElement)
        ) {
          const containerOffset =
            panelsSection.offsetTop + targetElem.offsetLeft;
          console.log(targetElem.offsetLeft);

          gsap.to(window, {
            scrollTo: {
              y: containerOffset * 1.5,
              autoKill: false
            },
            duration: 1
          });
        } else {
          gsap.to(window, {
            scrollTo: {
              y: targetElem,
              autoKill: false
            },
            duration: 1
          });
        }
      });
    });

    // 패널 옵션

    const sections = gsap.utils.toArray('.panel');
    let maxWidth = 0;

    const getMaxWidth = () => {
      maxWidth = 0;
      sections.forEach((section) => {
        maxWidth += section.offsetWidth;
      });
    };
    getMaxWidth();

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.overX',
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true
      }
    });

    ScrollTrigger.addEventListener('refreshInit', getMaxWidth);

    // 클래스 추가

    sections.forEach((sct, i) => {
      ScrollTrigger.create({
        trigger: sct,
        start: () =>
          `top top-=${
            (sct.offsetLeft - window.innerWidth / 2) *
            (maxWidth / (maxWidth - window.innerWidth))
          }`,
        end: () =>
          `+=${sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth))}`,
        toggleClass: { targets: sct, className: 'move' + i }
      });
    });

    // 텍스트 효과
    document.querySelector('#panel-1').addEventListener('mouseover', () => {
      gsap.to('.p', {
        duration: 1.4,
        text: "I'm a<br /> Beginner<br/> Frontend<br /> Developer"
      });
    });
    document.querySelector('#panel-2').addEventListener('mouseover', () => {
      gsap.to('.p', {
        duration: 1,
        text: 'Introduce <br/> My self'
      });

      gsap.to('.anchor', {
        color: 'rgb(255,255,255)'
      });
    });
    document.querySelector('#panel-3').addEventListener('mouseover', () => {
      gsap.to('.p', {
        duration: 1,
        text: 'Motivation'
      });
      gsap.to('.anchor', {
        color: 'rgb(0,0,0)'
      });
    });

    // anchor 텍스트 효과
    document.querySelector('.anc1').addEventListener('click', () => {
      gsap.to('.p', {
        duration: 1.4,
        text: "I'm a<br /> Beginner<br/> Frontend<br /> Developer"
      });
      gsap.to('.anchor', {
        color: 'rgb(255,255,255)'
      });
    });
    document.querySelector('.anc2').addEventListener('click', () => {
      gsap.to('.p', {
        duration: 1,
        text: 'Introduce <br/> My self'
      });
      gsap.to('.anchor', {
        color: 'rgb(255,255,255)'
      });
    });
    document.querySelector('.anc3').addEventListener('click', () => {
      gsap.to('.p', {
        duration: 1,
        text: 'Motivation'
      });
      gsap.to('.anchor', {
        color: 'rgb(0,0,0)'
      });
    });
  });

  return (
    <div className="mainContainer">
      <HomeButton />
      <div id="navbar">
        <a href="#panel-1" className="anchor anc1">
          &sdot;
        </a>
        <a href="#panel-2" className="anchor anc2">
          &sdot;
        </a>
        <a href="#panel-3" className="anchor anc3">
          &sdot;
        </a>
      </div>
      <div className="overX">
        <div className="row">
          <div className="box a panel" id="panel-1"></div>
          <div className="box b panel" id="panel-2"></div>
          <h1 className="mainTitle">
            <p className="p">
              I'm a<br /> Beginner
              <br /> Frontend
              <br /> Developer
            </p>
          </h1>
          <div className="profile"></div>
          <div className="box c panel " id="panel-3">
            panel 3<img src={Motivation} alt="motivation" id="motivation"></img>
          </div>
        </div>
      </div>
      <div className="box nx ">next page</div>
    </div>
  );
}

export default AboutMe;

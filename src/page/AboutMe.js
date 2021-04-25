import gsap, { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import React, { useEffect } from 'react';

import './css/AboutMe.css';
import HomeButton from './tools/HomeButton';

import Motivation from '../static/images/motivation.jpg';

function AboutMe() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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

          gsap.to(window, {
            scrollTo: {
              y: containerOffset / 2,
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

    // // 프로필 move 옵션
    // gsap.to('.profile', {
    //   xPercent: -100 * (sections.length - 1.5),
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.overX',
    //     pin: true,
    //     scrub: 1,
    //     start: 'top top',
    //     end: () => '+=' + document.querySelector('.overX').offsetWidth
    //   },
    //   left: 0,
    //   duration: 1
    // });
    let maxWidth = 0;

    const getMaxWidth = () => {
      maxWidth = 0;
      sections.forEach((section) => {
        maxWidth += section.offsetWidth;
      });
    };
    getMaxWidth();

    console.log(sections[0].offsetWidth);

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
  });
  return (
    <div className="mainContainer">
      <HomeButton />
      <div id="navbar">
        <a href="#panel-1" className="anchor">
          &sdot;
        </a>
        <a href="#panel-2" className="anchor">
          &sdot;
        </a>
        <a href="#panel-3" className="anchor">
          &sdot;
        </a>
      </div>
      <div className="overX">
        <div className="row">
          <div className="box a panel" id="panel-1"></div>
          <div className="box b panel" id="panel-2"></div>
          <h1 className="mainTitle">
            <p>
              I’m a Newcomer
              <br />
              Frontend Developer,
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

import gsap, { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import React, { useEffect } from 'react';

import './css/AboutMe.css';
import HomeButton from './tools/HomeButton';

function AboutMe() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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

    const sections = gsap.utils.toArray('.panel');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.overX',
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => '+=' + document.querySelector('.overX').offsetWidth
      }
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
      <div className="overX ">
        <div className="row">
          <div className="box a panel" id="panel-1">
            <h1 className="mainTitle">
              <p>I’m a Newcomer</p>
              <p>Frontend Developer,</p>
            </h1>
            <div className="profile"></div>
          </div>
          <div className="box b panel" id="panel-2">
            panel 2
          </div>
          <div className="box c panel " id="panel-3">
            panel 3
          </div>
        </div>
      </div>
      <div className="box nx ">next page</div>
    </div>
  );
}

export default AboutMe;

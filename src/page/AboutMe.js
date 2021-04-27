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
    const titleList = [
      "I'm a<br /> Beginner<br/> Frontend<br /> Developer",
      'Introduce <br/> My self',
      'Motivation'
    ];
    const colorList = ['rgb(255,255,255)', 'rgb(255,255,255)', 'rgb(0,0,0)'];

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
        toggleClass: { targets: sct, className: 'move' + i },
        onEnter: () => {
          console.log(`anc${i}`);
          gsap.to('.p', {
            duration: 1.4,
            text: titleList[i]
          });
          gsap.to(`.anc${i}`, {
            opacity: 1
          });
          gsap.to(`.stateBlack${i}`, {
            color: 'rgb(0,0,0)'
          });
        },
        onEnterBack: () => {
          gsap.to('.p', {
            duration: 1.4,
            text: titleList[i]
          });
          gsap.to(`.anc${i}`, {
            opacity: 1
          });
          gsap.to(`.stateWhite${i}`, {
            color: 'rgb(255,255,255)'
          });
        },
        onLeave: () => {
          gsap.to(`.anc${i}`, {
            opacity: 0.7
          });
        },
        onLeaveBack: () => {
          gsap.to(`.anc${i}`, {
            opacity: 0.7
          });
        }
      });
    });

    const anchors = gsap.utils.toArray('.anchor');

    // anchors.forEach((anc, i) => {
    //   ScrollTrigger.create({
    //     trigger: sections[i],
    //     start: () =>
    //       `top top-=${
    //         (sections[i].offsetLeft - window.innerWidth / 2) *
    //         (maxWidth / (maxWidth - window.innerWidth))
    //       }`,
    //     end: () =>
    //       `+=${
    //         sections[i].offsetWidth *
    //         (maxWidth / (maxWidth - window.innerWidth))
    //       }`,
    //     toggleClass: { targets: anc, className: 'now' }
    //   });
    // });
  });

  return (
    <div className="mainContainer">
      <HomeButton />
      <div id="navbar">
        <a href="#panel-1" className="anchor anc0 stateWhite1 stateBlack2">
          &sdot;
        </a>
        <a href="#panel-2" className="anchor anc1 stateWhite1 stateBlack2">
          &sdot;
        </a>
        <a href="#panel-3" className="anchor anc2 stateWhite1 stateBlack2">
          &sdot;
        </a>
      </div>
      <div className="overX">
        <div className="row">
          <div className="box a panel" id="panel-1"></div>
          <div className="box b panel" id="panel-2">
            <div id="introBox">
              <h3 className="introduce" id="name">
                이름:<span> 손원재</span>
              </h3>
              <h3 className="introduce" id="age">
                나이:<span> 26세</span>
              </h3>
              <h3 className="introduce" id="academicBg">
                학력:<span> 계명대학교 졸업</span>
              </h3>
              <h3 className="introduce" id="major">
                전공:<span> 산업디자인 학과</span>
              </h3>
              <h3 className="introduce" id="major">
                수상 경력:<span> 희망이음 경진대회 (동상) 수상</span>
              </h3>
              <h3 className="introduce" id="major">
                코딩 경험:
                <span>
                  &nbsp;교내 IT융합교육센터 주관 코딩집중캠프 참여
                  <br />
                  &ensp;&ensp;&ensp;&ensp;&ensp;&emsp;&emsp;패스트캠퍼스
                  온라인강의 수강
                </span>
              </h3>
              <h3 className="introduce" id="major">
                자격증:
                <span> MOS MASTER</span>
              </h3>
            </div>
          </div>

          <h1 className="mainTitle">
            <p className="p">
              I'm a<br /> Beginner
              <br /> Frontend
              <br /> Developer
            </p>
          </h1>
          <div className="profile"></div>

          <div className="box c panel " id="panel-3">
            <img src={Motivation} alt="motivation" id="motivation"></img>
          </div>
        </div>
      </div>
      <div className="box nx ">next page</div>
    </div>
  );
}

export default AboutMe;

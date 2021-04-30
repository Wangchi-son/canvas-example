import gsap, { ScrollTrigger, ScrollToPlugin, TextPlugin } from 'gsap/all';
import React, { useEffect } from 'react';

import './css/AboutMe.css';
import HomeButton from './tools/HomeButton';

import Motivation from '../static/images/motivation.jpg';

function AboutMe() {
  useEffect((e) => {
    console.log(e);
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

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

    // 토글 효과 추가
    const titleList = [
      "I'm a<br />Frontend<br /> Web Developer",
      'Introduce <br/> My self',
      'Motivation'
    ];

    // anchor 옵션
    const panelsContainer = document.querySelector('.row');

    document.querySelectorAll('.anchor').forEach((anc, i) => {
      anc.addEventListener('click', (e) => {
        e.preventDefault();

        const targetElem = document.querySelector(
          e.target.getAttribute('href')
        );
        if (
          targetElem &&
          panelsContainer.isSameNode(targetElem.parentElement)
        ) {
          gsap.to(window, {
            scrollTo: {
              y: targetElem.offsetLeft + (targetElem.offsetWidth / 2) * i,
              autoKill: false
            },
            duration: 1
          });
        }
      });
    });

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
    return () => {};
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
          <div className="box b panel" id="panel-2"></div>

          <h1 className="mainTitle">
            <p className="p">
              I'm a<br />
              Frontend
              <br /> Web Developer
            </p>
          </h1>
          <div className="profile"></div>
          <div id="introBox" className="lightOut1">
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

          <div className="box c panel " id="panel-3">
            <div id="motivation">
              <h4 className="motive">
                제가 디자인 전공에서 개발관련 직종을 희망하게 된 계기는
                <br />
                대학생활 마지막 학기에 인턴기회가 찾아와 한 학기동안
                <br />
                인쇄 시안을 관리하는 시각디자인 관련 인턴 업무를
                <br />
                맡고 있었을 때 였습니다. 저는 업무 중 새로운
                <br />
                브랜드 출시로 우연히 새로 구축된 사이트를
                <br />
                보게 되었는데, 그 때 어떤 강렬한 느낌을
                <br />
                받았고 웹 개발이야말로 제가 원했던
                <br />
                창작활동이라고 생각해 웹 개발에
                <br />
                무작정 뛰어들게 되었습니다.
              </h4>
              <img src={Motivation} alt="motivation" id="motivePic"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="stateWhite0 stateWhite2 stateBlack0 stateBlack1 lightOut0 lightOut2 nothing"></div>
    </div>
  );
}

export default AboutMe;

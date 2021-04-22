import gsap, { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';

import './css/AboutMe.css';

function AboutMe() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.to('.b', {
    //   scrollTrigger: {
    //     trigger: '.b',
    //     start: 'top top',
    //     scrub: 1,
    //     pin: true,
    //     markers: true,
    //     toggleActions: 'restart pause reverse pause'
    //   }
    // });

    // gsap.utils.toArray('.panel').forEach((panel, i) => {
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     start: 'top top',
    //     pin: true,
    //     pinSpacing: false
    //   });
    // });

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
      <div className="overX">
        <div className="row">
          <div className="box a panel">panel 1</div>
          <div className="box b panel">panel 2</div>
          <div className="box c panel">panel 3</div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

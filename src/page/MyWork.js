import gsap, { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';
import './css/MyWork.css';
import HomeButton from './tools/HomeButton';

function MyWork() {
  useEffect(() => {
    let panels = gsap.utils.toArray('.panels');
    let currentSection = panels[0];
    console.log(panels.length);

    gsap.set('.myWorkContainer', {
      height: panels.length * 100 + 'vh'
    });

    gsap.registerPlugin(ScrollTrigger);

    panels.forEach((section, i) => {
      ScrollTrigger.create({
        start: () => (i - 0.5) * window.innerHeight,
        end: () => (i + 0.5) * window.innerHeight,
        onToggle: (self) => self.isActive && setSection(section)
      });
    });

    function setSection(newSection) {
      if (newSection !== currentSection) {
        gsap.to(currentSection, { scale: 0.8, autoAlpha: 0 });
        gsap.to(newSection, { scale: 1, autoAlpha: 1 });
        currentSection = newSection;
      }
    }
  });

  return (
    <>
      <HomeButton />
      <div className="myWorkContainer">
        <section className="first panels blue">
          <h1>First Page</h1>
        </section>
        <section className="panels red">
          <h1>Second Page</h1>
        </section>
        <section className="panels orange">
          <h1>Third Page</h1>
        </section>
        <section className="panels purple">
          <h1>Fourth Page</h1>
        </section>
        <section className="panels green">
          <h1>Fifth Page</h1>
        </section>
      </div>
    </>
  );
}

export default MyWork;

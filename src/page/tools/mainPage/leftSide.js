import gsap from 'gsap/all';

export default function LeftSide() {
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
        window.location = 'http://localhost:3000/#/aboutme';
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

  document.getElementById('profileTitle').addEventListener('click', () => {
    gsap.to('#profileTitle', {
      opacity: 0,
      duration: 0.3
    });

    gsap.to('#profile', {
      opacity: 0,
      x: -2000,
      delay: 0.6,
      duration: 1.4,
      onComplete: () => {
        window.location = 'http://localhost:3000/#/aboutme';
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
}

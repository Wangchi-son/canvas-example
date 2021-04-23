import gsap from 'gsap/all';

export default function RightSide() {
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
}

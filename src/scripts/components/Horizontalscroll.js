import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default class Horizontalscroll {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    gsap.to(this.element.querySelector('.carousel-wrapper'), {
      xPercent:
        -100 * (this.element.querySelectorAll('.carousel-slide').length - 1), // Move by 100% per slide
      ease: 'none',
      scrollTrigger: {
        onEnter: () => {
          document.body.style.overflowY = 'hidden'; // Hide vertical scroll
        },
        onLeaveBack: () => {
          document.body.style.overflowY = 'auto'; // Show vertical scroll when leaving back
        },
        trigger: this.element,
        start: 'top top',
        end: `+=${
          this.element.querySelector('.carousel-wrapper').offsetWidth
        }px`, // Adjust based on scroll length
        scrub: true, // Smooth scrolling
        pin: true, // Pin the carousel during scroll
        anticipatePin: 1,
        markers: false, // Show markers for debugging, remove in production
      },
    });
  }
}

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default class Horizontalscroll {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    const totalSlides = this.element.querySelectorAll('.carousel-slide').length;
    const wrapperWidth =
      this.element.querySelector('.carousel-wrapper').offsetWidth;

    gsap.to(this.element.querySelector('.carousel-wrapper'), {
      xPercent: -100 * (totalSlides - 1), // Move by 100% per slide
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
        // Multiply wrapper width by a factor (e.g., 2 or more) to slow down scrolling speed
        end: `+=${wrapperWidth * 2}px`, // Adjust the factor to control speed
        scrub: true, // Smooth scrolling
        pin: true, // Pin the carousel during scroll
        anticipatePin: 1,
        markers: false, // Show markers for debugging, remove in production
      },
    });
  }
}

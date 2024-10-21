import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default class Horizontalscroll {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    const slides = this.element.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth; // Get width of one slide
    const totalWidth = slideWidth * totalSlides; // Total width calculation

    gsap.to(this.element.querySelector('.carousel-wrapper'), {
      xPercent: -100 * (totalSlides - 1),
      ease: 'none',
      scrollTrigger: {
        onEnter: () => {
          document.body.style.overflowY = 'hidden';
        },
        onLeaveBack: () => {
          document.body.style.overflowY = 'auto';
        },
        trigger: this.element,
        start: 'top top',
        end: `+=${totalWidth}px`, // Use the total width of all slides
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false,
      },
    });
  }
}

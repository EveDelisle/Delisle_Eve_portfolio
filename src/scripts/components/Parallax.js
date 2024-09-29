export default class Parallax {
  constructor(element) {
    //this.element = element;

    this.init();
  }

  init() {
    ParallaxScrollHero();
  }

  ParallaxScrollHero() {
    document.addEventListener('scroll', function () {
      const scrollPosition = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.floating-parallax');

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed');
        const offset = (scrollPosition * speed) / 100;
        element.style.transform = `translateY(${offset}px)`;
      });
    });
  }
}

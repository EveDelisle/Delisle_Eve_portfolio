export default class Lenis {
  constructor(element) {
    this.element = element;

    this.init();
  }

  init() {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Adjusts the speed
      easing: (t) => t ** 1.5, // Easing function for a smoother effect
      direction: 'vertical', // 'vertical' for vertical scroll; 'horizontal' for horizontal
      smooth: true, // Enable smooth scrolling
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    // Log scroll data
    lenis.on('scroll', (e) => {
      console.log('Scrolling:', e); // Logs the scroll event data to the console
    });

    // Add 'start' and 'end' event listeners
    lenis.on('start', () => {
      console.log('Scrolling started');
    });

    lenis.on('end', () => {
      console.log('Scrolling ended');
    });

    // Animation frame to update Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
}

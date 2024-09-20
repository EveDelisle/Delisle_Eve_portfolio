import lottie from 'lottie-web';

export default class Lottie {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this.loadLottieAnimation();
  }

  loadLottieAnimation() {
    const animation = lottie.loadAnimation({
      container: this.element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/33c44ba9-4683-4417-a350-a74241bc061e/xQ6UlyDoot.json',
    });

    // Handle scroll event to control animation based on scroll position
    window.addEventListener('scroll', () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;

      const maxFrames = animation.totalFrames;
      const frame = Math.round(scrollFraction * maxFrames);
      animation.goToAndStop(frame, true);
    });
  }
}

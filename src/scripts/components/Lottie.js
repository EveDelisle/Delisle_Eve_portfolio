export default class Lottie {
  constructor(element) {
    this.element = element;
    this.isReversed = false;
    this.init();
  }

  init() {
    this.loadLottieAnimation();
    this.AnimationReverse();
  }

  loadLottieAnimation() {}

  AnimationReverse() {
    const player = this.element;

    player.addEventListener('ready', () => {
      console.log('Lottie player is ready');

      // Now, add the complete event listener
      player.addEventListener('complete', () => {
        this.isReversed = !this.isReversed; // Toggle the direction flag
        player.setDirection(this.isReversed ? -1 : 1); // -1 to reverse, 1 to play forward
        player.play(); // Restart the animation with the new direction
      });
    });
  }
}

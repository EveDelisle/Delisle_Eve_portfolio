import { LottieInteractivity } from '@lottiefiles/lottie-interactivity';

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

  loadLottieAnimation() {
    document.addEventListener('DOMContentLoaded', () => {
      LottieInteractivity.create({
        player: myLottieAnimation,
        mode: 'scroll',
        actions: [
          {
            visibility: [0, 1], // Trigger when the animation is visible within the viewport
            type: 'seek',
            frames: [0, 100], // Define the frame range for the animation
          },
        ],
      });
    });
  }

  AnimationReverse() {
    const player = this.element;

    if ('reverse' in this.element.dataset) {
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
}

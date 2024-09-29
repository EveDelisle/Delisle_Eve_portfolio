import '@lottiefiles/lottie-player'; /*for cursor seek*/
import { create } from '@lottiefiles/lottie-interactivity'; /*for cursor seek*/

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
    document
      .querySelector('#monLottieInteractif')
      .addEventListener('load', () => {
        console.log('allo');
      });
    create({
      player: '#monLottieInteractif',
      mode: 'scroll',
      actions: [
        {
          visibility: [0, 1.0],
          type: 'seek',
          frames: [0, 300],
        },
      ],
    });
  }

  AnimationReverse() {
    const player = this.element;

    /*  player.addEventListener('ready', () => {
      console.log('Lottie player is ready');

      // Now, add the complete event listener
      player.addEventListener('complete', () => {
        this.isReversed = !this.isReversed; // Toggle the direction flag
        player.setDirection(this.isReversed ? -1 : 1); // -1 to reverse, 1 to play forward
        player.play(); // Restart the animation with the new direction
      });
    });*/
  }
}

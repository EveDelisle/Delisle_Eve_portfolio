import '@lottiefiles/lottie-player';

import { create } from '@lottiefiles/lottie-interactivity';

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
    /* if ('scroll' in this.element.dataset) {
      document
        .querySelector('#monLottieInteractif')
        .addEventListener('load', () => {
          console.log('allo');

          const startOffset = 0.4; // Start when 10% of the element is visible
          const endOffset = 0.9; // End when 90% of the element is visible

          create({
            player: '#monLottieInteractif',
            mode: 'scroll',
            actions: [
              {
                visibility: [startOffset, endOffset],
                type: 'seek',
                frames: [0, 180],
              },
            ],
          });
        });
    }*/

    document.addEventListener('DOMContentLoaded', function () {
      // Select all Lottie animations with the 'data-scroll' attribute
      const lottieElements = document.querySelectorAll('[data-scroll]');

      lottieElements.forEach((lottieElement) => {
        const playerId = `#${lottieElement.id}`;

        console.log(`Lottie ${playerId} loaded`);

        // Example offset values
        const startOffset = 0.3; // Start when 40% of the element is visible
        const endOffset = 0.9; // End when 90% of the element is visible

        // Initialize Lottie scroll behavior
        create({
          player: playerId, // Apply the animation to the specific element
          mode: 'scroll',
          actions: [
            {
              visibility: [startOffset, endOffset],
              type: 'seek',
              frames: [0, 180], // Adjust frames per lottie if needed
            },
          ],
        });
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

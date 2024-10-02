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
    if ('scroll' in this.element.dataset) {
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
    }
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
  /*import LottieWeb from 'lottie-web';
import { create } from '@lottiefiles/lottie-interactivity';

export default class Lottie {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this.loadLottie();
  }

  loadLottie() {
    const animation = LottieWeb.loadAnimation({
      container: this.element,
      name: `${this.element.dataset.name}`,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: `assets/lotties/${this.element.dataset.name}.json`,
    });

    if ('scroll' in this.element.dataset) {
      create({
        player: animation,
        mode: 'scroll',
        actions: [
          {
            visibility: [0, 1.0],
            type: 'seek',
            frames: [
              parseInt(this.element.dataset.start),
              parseInt(this.element.dataset.end),
            ],
          },
        ],
      });
    } else if ('hover' in this.element.dataset) {
      create({
        player: animation,
        mode: 'cursor',
        actions: [
          {
            type: 'hover',
            forceFlag: false,
            state: 'loop',
            frames: [
              parseInt(this.element.dataset.start),
              parseInt(this.element.dataset.end),
            ],
          },
        ],
      });
    }
  }*/
}

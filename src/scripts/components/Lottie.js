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
      container: document.getElementById('lottie-container1'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'https://lottie.host/33c44ba9-4683-4417-a350-a74241bc061e/xQ6UlyDoot.json',
    });

    let isReversed = false; // Declare a mutable variable to track animation direction

    // Function to reverse the animation direction
    const toggleDirection = () => {
      isReversed = !isReversed; // Toggle reverse state
      animation.setDirection(isReversed ? -1 : 1); // -1 for reverse, 1 for forward
      animation.play(); // Play the animation in the new direction
    };

    // Listen for the complete event to trigger the direction change
    animation.addEventListener('complete', function () {
      toggleDirection(); // Reverse direction once the animation completes
    });

    // Optional: Control speed
    animation.setSpeed(1); // Change this value to control speed (1 is normal speed)
  }
}

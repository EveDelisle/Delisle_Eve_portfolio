export default class Scrolly {
  constructor(element) {
    this.element = element;

    this.options = {
      rootMargin: '0px', // Define margins for the viewport
    };

    this.init();
  }

  init() {
    this.items = this.element.querySelectorAll('[data-scrolly]');

    // Add a scroll event listener to the window
    window.addEventListener('scroll', this.onScroll.bind(this));

    // Initial call to position elements correctly
    this.onScroll();
  }

  onScroll() {
    const scrollY = window.scrollY; // Get current scroll position

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const scrollSpeed =
        parseFloat(item.getAttribute('data-scrolly-speed')) || 1; // Speed of the scroll effect
      const startPosition =
        parseFloat(item.getAttribute('data-start-position')) || 0; // Starting position of the element
      const direction = item.getAttribute('data-direction') || 'horizontal'; // 'horizontal' or 'vertical'

      const directionX =
        item.getAttribute('data-direction-x') || 'left-to-right'; // Horizontal movement direction
      const directionY =
        item.getAttribute('data-direction-y') || 'top-to-bottom'; // Vertical movement direction

      // Get max and min positions (optional)
      const maxPosition =
        parseFloat(item.getAttribute('data-max-position')) || Infinity;
      const minPosition =
        parseFloat(item.getAttribute('data-min-position')) || -Infinity;

      let newPosition;

      // Horizontal movement
      if (direction === 'horizontal') {
        if (directionX === 'left-to-right') {
          newPosition = scrollY * scrollSpeed + startPosition; // Move left to right
        } else if (directionX === 'right-to-left') {
          newPosition = startPosition - scrollY * scrollSpeed; // Move right to left
        }
        newPosition = Math.min(Math.max(newPosition, minPosition), maxPosition); // Apply limits
        item.style.transform = `translateX(${newPosition}px)`;
      }

      // Vertical movement
      if (direction === 'vertical') {
        if (directionY === 'top-to-bottom') {
          newPosition = scrollY * scrollSpeed + startPosition; // Move top to bottom
        } else if (directionY === 'bottom-to-top') {
          newPosition = startPosition - scrollY * scrollSpeed; // Move bottom to top
        }
        newPosition = Math.min(Math.max(newPosition, minPosition), maxPosition); // Apply limits
        item.style.transform = `translateY(${newPosition}px)`;
      }
    }

    // Apply smooth transition to all elements
    this.items.forEach((item) => {
      item.style.transition = 'transform 0.2s ease-out'; // Adjust duration and easing as needed
    });
  }
}

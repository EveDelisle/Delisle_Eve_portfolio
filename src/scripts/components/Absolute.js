export default class Absolute {
  constructor(element) {
    this.element = element;

    this.init();
  }

  init() {
    this.items = this.element.querySelectorAll('[data-absolute]');

    // Bind 'this' for the load event handler
    window.addEventListener('load', this.updateSectionHeight.bind(this));

    // Optionally, also recalculate on window resize to adjust for responsive designs
    window.addEventListener('resize', this.updateSectionHeight.bind(this));
  }

  updateSectionHeight() {
    // Get the section using the passed element (this.element)
    const section = this.element;

    // Calculate the maximum height from all absolutely positioned elements
    let maxHeight = 0;
    this.items.forEach((item) => {
      const itemHeight = item.offsetHeight;
      const itemTop = item.offsetTop;

      // Calculate the total height needed to contain the item
      const totalHeight = itemTop + itemHeight;

      if (totalHeight > maxHeight) {
        maxHeight = totalHeight;
      }
    });

    // Set the height of the section based on the tallest absolute content
    section.style.height = `${maxHeight}px`;
  }
}

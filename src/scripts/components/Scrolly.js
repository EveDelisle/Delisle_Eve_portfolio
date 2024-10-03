export default class Scrolly {
  constructor(element) {
    this.element = element;

    this.options = {
      //nous voulons qu'il soit globale

      rootMargin: '0px', //les quatre côtés de ma fenêtre de navigateur ou juste un '0px'
    };

    this.init();
  }
  /* init() {
    const observer = new IntersectionObserver(
      this.watch.bind(this),
      this.options
    ); //callbakc est watch

    const items = this.element.querySelectorAll('[data-scrolly]');
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      observer.observe(item);

      console.log('allo');
    } //observer tous les éléments dans la data-scrolly   var target pour const items
    //changer target pour item
  }

  /*watch(entries, observer) {
    //observer ne fait que référence a intersectionObserver et non la variable
    //console.log(entries);
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target; //chacun des elements html qui repond oui ou non
      console.log(target);

      if (entry.isIntersecting) {
        //console.log('oui');
        target.classList.add('is-active');
        observer.unobserve(target); //pour enlever les animatons quand retourne vers le haut
      } else {
        //console.log('non');

        target.classList.remove('is-active');
      }
    }
  }*/

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
        parseFloat(item.getAttribute('data-scrolly-speed')) || 1; // Get scroll speed from attribute or default to 1
      const startPosition =
        parseFloat(item.getAttribute('data-start-position')) || 0; // Get starting position from attribute or default to 0
      const direction = item.getAttribute('data-direction') || 'horizontal'; // Get movement direction from attribute

      // Get max and min positions
      const maxPosition =
        parseFloat(item.getAttribute('data-max-position')) || Infinity; // Default to Infinity if not specified
      const minPosition =
        parseFloat(item.getAttribute('data-min-position')) || -Infinity; // Default to -Infinity if not specified

      let newPosition;

      if (direction === 'horizontal') {
        // Calculate new position for horizontal movement
        newPosition = scrollY * scrollSpeed + startPosition;
        item.style.transform = `translateX(${newPosition}px)`;
      } else if (direction === 'vertical') {
        // Calculate new position for vertical movement (opposite direction)
        newPosition = startPosition - scrollY * scrollSpeed; // Subtract scroll position
        item.style.transform = `translateY(${newPosition}px)`;
      }

      // Apply limits
      if (newPosition > maxPosition) {
        newPosition = maxPosition; // Limit to max position
      } else if (newPosition < minPosition) {
        newPosition = minPosition; // Limit to min position
      }

      // Update the item's transform with the limited position
      if (direction === 'horizontal') {
        item.style.transform = `translateX(${newPosition}px)`;
      } else if (direction === 'vertical') {
        item.style.transform = `translateY(${newPosition}px)`;
      }
    }
  }
}

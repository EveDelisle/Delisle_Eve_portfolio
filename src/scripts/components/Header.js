export default class Header {
  constructor(element) {
    this.element = element;

    this.options = {
      treshold: 0.1,
    };
    this.scrollPosition = 0;
    this.lastScrollPosition = 0;
    this.html = document.documentElement;

    this.init();
    this.initNavMobile();
  }

  init() {
    this.setOptions();
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  setOptions() {
    //Vérifier les différents attributs data sur la composante
  }
  onScroll() {
    this.lastScrollPosition = this.scrollPosition;
    this.scrollPosition = document.scrollingElement.scrollTop;

    this.setHeaderState();
    this.setDirections();
  }

  setHeaderState() {
    if (
      this.scrollPosition >
      document.scrollingElement.scrollHeight * this.options.treshold
    ) {
      this.html.classList.add('header-is-hidden');
    } else {
      this.html.classList.remove('header-is-hidden');
    }
  }
  setDirections() {
    if (this.scrollPosition >= this.lastScrollPosition) {
      this.html.classList.add('is-scrolling-down');
      this.html.classList.remove('is-scrolling-up');
    } else {
      //scroll vers le haut
      this.html.classList.remove('is-scrolling-down');
      this.html.classList.add('is-scrolling-up');
    }
  }

  initNavMobile() {
    const toggle = this.element.querySelector('.js-toggle');

    /*const links = this.element.querySelectorAll('.js-nav-link');

    for (let i = 0; i < links.length; i++) {
      const link = links[i];

      links.addEventListener('click', this.closeNav.bind(this));
    }*/

    toggle.addEventListener('click', this.onToggleNav.bind(this));
  }

  onToggleNav() {
    this.html.classList.toggle('nav-is-active');
  }

  closeNav() {
    this.html.classList.remove('nav-is-active');
  }
}

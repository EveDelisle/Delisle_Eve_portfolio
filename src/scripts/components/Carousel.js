import Swiper from 'swiper/bundle';
export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {
      slidesPerview: 1,

      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },

      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
        clickable: true,
      },
    };

    this.init();
  }

  init() {
    const swiper = new Swiper(this.element, this.options);
  }
}

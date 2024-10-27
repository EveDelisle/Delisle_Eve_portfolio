import Carousel from './components/Carousel';
import Header from './components/Header';
import Lottie from './components/Lottie';
import Scrolly from './components/Scrolly';

import Animations from './components/Animations';

import Lenis from './components/Lenis';

export default class ComponentFactory {
  constructor() {
    this.componentInstances = [];
    this.componentList = {
      Carousel,
      Header,
      Lottie,
      Scrolly,

      Animations,
      Lenis,
    };
    this.init();
  }
  init() {
    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (this.componentList[componentName]) {
        const instance = new this.componentList[componentName](element);
        this.componentInstances.push(instance);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }
  }
}

export default class Animations {
  constructor(element) {
    this.element = element;

    this.options = {
      //nous voulons qu'il soit globale

      rootMargin: '0px', //les quatre côtés de ma fenêtre de navigateur ou juste un '0px'
    };
    this.init();
  }

  init() {
    const observer = new IntersectionObserver(
      this.watch.bind(this),
      this.options
    ); //callbakc est watch

    const items = this.element.querySelectorAll('[data-animations]');
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      observer.observe(item);

      console.log('allo');
    } //observer tous les éléments dans la data-scrolly   var target pour const items
    //changer target pour item
  }

  watch(entries, observer) {
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
  }
}

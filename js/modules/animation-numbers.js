export default class InitAnimationNumbers {
  constructor(numbers, elementObserver, oberverClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.elementObserver = document.querySelector(elementObserver);
    this.observerClass = oberverClass;

    this.mutationAction = this.mutationAction.bind(this);
  }

  static incrementNumbers(number) {
    const value = +number.innerText;
    const increment = Math.floor(value / 100);

    let count = 0;
    const timer = setInterval(() => {
      count += increment;
      number.innerText = count;
      if (count > value) {
        number.innerText = value;
        clearInterval(timer);
      }
    }, 20);
  }

  animationNumbers() {
    this.numbers.forEach((number) => {
      this.constructor.incrementNumbers(number);
    });
  }

  mutationAction(mutationEvent) {
    if (mutationEvent[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animationNumbers();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.mutationAction);
    this.observer.observe(this.elementObserver, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.elementObserver) {
      this.addMutationObserver();
    }
    return this;
  }
}

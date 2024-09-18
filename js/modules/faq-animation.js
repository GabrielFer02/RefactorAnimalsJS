export default class ActiveFaq {
  constructor(list) {
    this.list = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleFaq(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  activeFaqEvent() {
    this.list.forEach((item) => {
      item.addEventListener("click", () => {
        this.toggleFaq(item);
      });
    });
  }

  init() {
    if (this.list.length) {
      this.toggleFaq(this.list[0]);
      this.activeFaqEvent();
    }
  }
}

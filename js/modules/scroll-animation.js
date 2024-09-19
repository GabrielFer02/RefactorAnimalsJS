export default class SectionNavigation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((item) => {
      if (item.getBoundingClientRect().top - window.innerHeight * 0.6 < 0) {
        if (!item.classList.contains("ativo")) {
          item.classList.add("ativo");
        }
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.animaScroll();
      window.addEventListener("scroll", this.animaScroll);
    }
  }
}

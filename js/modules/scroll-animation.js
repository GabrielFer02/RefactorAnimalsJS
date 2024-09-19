export default class SectionNavigation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);

    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const sectionTop = section.offsetTop;
      return {
        element: section,
        sectionTop: Math.floor(sectionTop - window.innerHeight * 0.6),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.sectionTop) {
        if (!item.element.classList.contains("ativo")) {
          item.element.classList.add("ativo");
        }
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }
}

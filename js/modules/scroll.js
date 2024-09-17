export default class ScrollSmooth {
  constructor(links, option) {
    this.linksInternos = document.querySelectorAll(links);
    if (option === undefined) {
      this.option = "smooth";
    } else {
      this.option = option;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const section = document.querySelector(
      event.currentTarget.getAttribute("href")
    );
    window.scrollTo({
      top: section.offsetTop,
      behavior: this.option,
    });
  }

  addLinkEvent() {
    this.linksInternos.forEach((item) => {
      item.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}

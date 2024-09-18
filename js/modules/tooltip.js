export default class ActionTooltip {
  constructor(list) {
    this.tooltips = document.querySelectorAll(list);
    this.moveOnMouse = this.moveOnMouse.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  createTooltip(element) {
    const tooltipBox = document.createElement("div");
    const textElement = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = textElement;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  mouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 10}px`;

    if (event.pageX + 210 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 157}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 15}px`;
    }
  }

  mouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.mouseLeave);
    currentTarget.removeEventListener("mousemove", this.mouseMove);
  }

  moveOnMouse({ currentTarget }) {
    this.createTooltip(currentTarget);

    currentTarget.addEventListener("mousemove", this.mouseMove);
    currentTarget.addEventListener("mouseleave", this.mouseLeave);
  }

  addTooltipEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.moveOnMouse);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipEvent();
    }
    return this;
  }
}

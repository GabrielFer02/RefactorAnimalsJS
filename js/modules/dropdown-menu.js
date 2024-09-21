import clickOut from "./clickout.js";

export default class DropdownMenuAction {
  constructor(list) {
    this.menuList = document.querySelectorAll(list);
    this.events = ["click", "touchstart"];
    this.activeClass = "active";

    this.activedropdownMenu = this.activedropdownMenu.bind(this);
  }

  activedropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    clickOut(event.currentTarget, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownEvent() {
    this.menuList.forEach((menu) => {
      this.events.forEach((actionEvent) => {
        menu.addEventListener(actionEvent, this.activedropdownMenu);
      });
    });
  }

  init() {
    if (this.menuList.length) {
      this.addDropdownEvent();
    }
    return this;
  }
}

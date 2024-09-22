import clickOut from "./clickout.js";

export default class InitMenuMobile {
  constructor(menuButton, menuList) {
    this.menuButtom = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.events = ["click", "touchstart"];
    this.className = "active";

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuButtom.classList.add(this.className);
    this.menuList.classList.add(this.className);
    clickOut(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.className);
      this.menuButtom.classList.remove(this.className);
    });
  }

  addMobileEvent() {
    this.events.forEach((actionEvent) => {
      this.menuButtom.addEventListener(actionEvent, this.openMenu);
    });
  }

  init() {
    if (this.menuButtom && this.menuList) {
      this.addMobileEvent();
    }
  }
}

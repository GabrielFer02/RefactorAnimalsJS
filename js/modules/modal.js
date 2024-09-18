export default class InitModal {
  constructor(botaoAbrir, botaoFechar, BotaoContainer) {
    this.buttomOpen = document.querySelector(botaoAbrir);
    this.buttomClose = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(BotaoContainer);

    this.clickOutModal = this.clickOutModal.bind(this);
    this.eventActionModal = this.eventActionModal.bind(this);
  }

  actionModal() {
    this.containerModal.classList.toggle("ativo");
  }

  eventActionModal(event) {
    event.preventDefault();
    this.actionModal();
  }

  clickOutModal(event) {
    if (event.target === this.containerModal) {
      this.actionModal(event);
    }
  }

  initActionModal() {
    this.buttomOpen.addEventListener("click", this.eventActionModal);
    this.buttomClose.addEventListener("click", this.eventActionModal);
    this.containerModal.addEventListener("click", this.clickOutModal);
  }

  init() {
    if (this.buttomOpen && this.buttomClose && this.containerModal) {
      this.initActionModal();
    }
    return this;
  }
}

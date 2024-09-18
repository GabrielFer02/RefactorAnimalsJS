export default class ActiveList {
  constructor(menu, content) {
    this.listaAnimais = document.querySelectorAll(menu);
    this.listaDescricao = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  ativaDescricao(index) {
    this.listaDescricao.forEach((item) => {
      item.classList.remove(this.activeClass);
    });

    this.listaDescricao[index].classList.add(
      this.activeClass,
      this.listaDescricao[index].dataset.anime
    );
  }

  initAtivaDescricao() {
    this.listaAnimais.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.ativaDescricao(index);
      });
    });
  }

  init() {
    if (this.listaAnimais.length && this.listaDescricao.length) {
      this.ativaDescricao(0);
      this.initAtivaDescricao();
    }
    return this;
  }
}

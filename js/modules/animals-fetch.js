import InitAnimationNumbers from "./animation-numbers.js";

export default function initAnimalsFetch(url, target) {
  function createAnimalRegion(animal) {
    const animalDiv = document.createElement("div");

    animalDiv.classList.add("numeros-animal");
    animalDiv.innerHTML = `<h3>${animal.animal}</h3>
    <span data-number>${animal.number}</span>`;

    return animalDiv;
  }

  function initCreateAnimalRegion(animal) {
    const div = createAnimalRegion(animal);
    document.querySelector(target).appendChild(div);
  }

  function numbersAnimation() {
    const initAnimationNumbers = new InitAnimationNumbers(
      "[data-number]",
      "section.numeros",
      "ativo"
    );
    initAnimationNumbers.init();
  }

  async function fetchAnimalsInfo() {
    try {
      const animalsJson = await (await fetch(url)).json();

      animalsJson.forEach((animal) => {
        initCreateAnimalRegion(animal);
      });
      numbersAnimation();
    } catch (erro) {
      console.log(erro);
    }
  }

  return fetchAnimalsInfo();
}

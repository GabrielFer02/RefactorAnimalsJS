export default function initFetchBitcoin(url, target) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((bitcoin) => {
      document.querySelector(target).innerText = (
        1000 / bitcoin.BRL.sell
      ).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}

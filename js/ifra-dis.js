const iframe = document.querySelector('[name="ifr"]');

iframe.onload = function() {
  console.log("The iframe is loaded");
}
iframe.onerror = function() {
  console.log("Something wrong happened");
}

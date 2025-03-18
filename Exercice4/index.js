const btn = document.getElementById("myButton");
const prg = document.getElementById("myParagraph");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  prg.textContent = "Bonjour, vous avez cliqué sur le bouton !";
});

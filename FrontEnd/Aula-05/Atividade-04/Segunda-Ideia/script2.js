const alvo = document.getElementById("alvo");
const pontosSpan = document.getElementById("pontos");

let pontos = 0;

function moverAlvo() {
  let x = Math.random() * 400;
  let y = Math.random() * 300;
  alvo.style.transform = "translate(" + x + "px, " + y + "px)";
}

// Move automaticamente a cada 1 segundo
const intervalo = setInterval(moverAlvo, 1000);

alvo.addEventListener("click", function() {
  pontos++;
  pontosSpan.textContent = pontos;

  moverAlvo(); // 🔥 Move imediatamente ao clicar
});
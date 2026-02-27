let pontos = 0;
let letra = "";
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function gerar() {
  letra = letras[Math.floor(Math.random() * letras.length)];
  document.getElementById("letra").textContent = letra;
}

document.addEventListener("keydown", function(e) {
  if (e.key.toUpperCase() === letra) {
    pontos++;
    document.getElementById("pontos").textContent = pontos;
    document.getElementById("mensagem").textContent = "Acertou✅";
    gerar();
  } else {
    document.getElementById("mensagem").textContent = "Errou❌";
  }
});

document.getElementById("reiniciar").addEventListener("click", function() {
  pontos = 0;
  document.getElementById("pontos").textContent = 0;
  document.getElementById("mensagem").textContent = "";
  gerar();
});


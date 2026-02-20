
// ============================ Eventos do Mouse ====================================

var area = document.getElementById("area")
var mensagem = document.getElementById("mensagem")

area.addEventListener("click", function () {
    mensagem.textContent = "Clique Duplo detectado!";
});

area.addEventListener("dblclick", function () {
    if (area.style.background == "lightgreen") {
        area.style.background = "white";
    } else {
        area.style.background = "lightgreen";
    }
});

area.addEventListener("mouseenter", function () {


    mensagem.textContent = "O mouse entrou na área!";
    area.style.background = "red";
});

area.addEventListener("mouseleave", function () {
    mensagem.textContent = "O mouse saiu da área!";
    area.style.background = "blue";
});

var posicao = document.getElementById("posicao")

area.addEventListener("mousemove", function (event) {
    posicao.textContent = "X:" + event.clientX + " Y:" + event.clientY;
});

area.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("Botão direito clicado!");
});

// ============================ Eventos do Teclado ====================================

document.addEventListener("keyup", function(event){
//console.log("Tecla liberada: " + event.key);
});


document.addEventListener("keydown", function(event){
//console.log("Tecla pressionada: " + event.Key);
});

document.addEventListener("keypress", function(event){
//console.log("Caractere digitado: " + event.key);
});

document.addEventListener("keydown", function(event){
// Exibe a tecla pressionada
var campo = document.getElementById("resultado");
campo.textContent = "Tecla pressionada: " + event.key;
// Também mostra no console
console.log("Tecla pressionada: " + event.key);
});



// ============================ Eventos do Formulário ====================================

var form = document.getElementById("meuFormulario");

form.addEventListener("submit", function(event){
event.preventDefault(); //Impede o comportamento padrão do navegador;
console.log("Formulário enviado!");
});



// ============================ Eventos da Janela ====================================
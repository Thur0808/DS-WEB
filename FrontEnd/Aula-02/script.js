//Funções em JavaScript

function somarnumeros(num1, num2){
    return num1 + num2;
}

let resultado = somarnumeros(5,10)
console.log(resultado)

//alert("Esse é o resultado esperado?", resultado)


// Trabalhando com data e hora

let dataAtual = new Date()
console.log(dataAtual.toISOString())

//Extraindo parte especificas data

let ano = dataAtual.getFullYear()
let mes = dataAtual.getMonth() +1;
let dia = dataAtual.getDate();
let hora = dataAtual.getHours();
let minuto = dataAtual.getMinutes();
let segundo = dataAtual.getSeconds();

console.log(`Data atual: ${dia}/${mes + 1}/${ano} ${hora}:${minuto}:${segundo}`);


//====================================================================

//Outro Exemplo de Date
let hoje = new Date()
let diasParaAdicionar = 7;

//Cria uma nova data a partir da data atual
let novaData = new Date(hoje);
novaData.setDate(novaData.getDate() + diasParaAdicionar);

//Exibe a data no formato local, ou seja, dia/mes/ano
console.log(novaData.toLocaleDateString());


//Diferença entre duas datas

let data1 = new Date('2025-03-19');
let data2 = new Date('2025-03-25');

//Diferença em Milissegundos
let diferencaMS = data2 - data1;


//Manipulando o DOM
document.getElementById("conteudo").innerHTML = "<p>Ola Mundo</p>";

var valor = document.getElementById("conteudo").innerHTML;
console.log(valor);



//Usando o setAttribute e o getAttribute

document.getElementById("foto").setAttribute("src", "neymar.jpeg");

document.getElementById("foto").getAttribute("src");

console.log(document.getElementById("foto").getAttribute("src"));

//Alterando propriedades CSS
document.getElementById("conteudo").style.backgroundColor = "lightblue";
document.getElementById("foto").style.width = "500px";
document.getElementById("conteudo").style.fontSize = "60px";

//Criando uma funçaõ para um botão
function mudaTamanho(){
    document.getElementById("foto").style.width = "800px";
}
function diminuirTamanho(){
    document.getElementById("foto").style.width = "500px";
}

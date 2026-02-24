var cap = Number(prompt("Digite o Capital"))

var tempo = Number(prompt("Digite quanto tempo será investido"))

var taxa = Number(prompt("Digite a Taxa"))

var resultado = (cap * (1+(taxa/100)) ** tempo);

alert((resultado.toFixed(2)));
console.log(resultado)
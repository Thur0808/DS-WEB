//Criando o contador de Itens
var contadorItem = 0

//Incrementando o Contador de Itens
function adicionar() {
    contadorItem ++
//Crio o Item
    let novoItem = document.createElement("li");
    let novaTarefa = document.getElementById("novaTarefa").value
//Adiciono texto ao meu item
    novoItem.textContent = contadorItem + " - " + novaTarefa;
//Atribuo um ID   
    novoItem.setAttribute("id",contadorItem);

    //Cria o botão de remover
    let botaoRemover = document.createElement("button")
    botaoRemover.textContent = "Remover" //Adiciona texto ao botão
    botaoRemover.setAttribute("onclick", "remover("+contadorItem+")") //Adiciona uma função ao botão

    novoItem.appendChild(botaoRemover) //Adiciona o Botão de Remover
    document.getElementById("lista").appendChild(novoItem);
}


function remover(itemLista){
    var item = document.getElementById(itemLista);
    document.getElementById("lista").removeChild(item);
}

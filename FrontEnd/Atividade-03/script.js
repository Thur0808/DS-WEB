var contadorItem = 0

function adicionar() { //começa a função de adicionar
contadorItem++

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let rm = document.getElementById("rm").value;
    let tel = document.getElementById("tel").value;
    let turma = document.getElementById("turma").value;

    let conteudo = `Nome: ${nome} <br> Email: ${email} <br> RM: ${rm} <br> Telefone: ${tel} <br> Turma: ${turma}`;
    let novoItem = document.createElement("li");
    novoItem.innerHTML = conteudo;

    novoItem.setAttribute("id", contadorItem);

    // Cria o botão de remover
    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.setAttribute("onclick", "remover(" + contadorItem + ")");

    novoItem.appendChild(botaoRemover); 
    document.getElementById("lista").appendChild(novoItem); 
}

function remover(itemLista) {
    var item = document.getElementById(itemLista);
    document.getElementById("lista").removeChild(item);
}

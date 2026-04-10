var divResposta        = document.getElementById('resposta')
var inputNome          = document.getElementById('nome')
var inputCategoria          = document.getElementById('categoria')
var checkboxDisponivel = document.getElementById('disponivel')

document.addEventListener('DOMContentLoaded', function() {
    getItens()
    getCategorias()
})

document.getElementById('botaoEnviar').addEventListener('click', postItens)

async function getItens() {
    var requisicao = await fetch('http://localhost/meus-planos-api/itens')
    var resposta   = await requisicao.json()

    var linhas = ''

    for (var i = 0; i < resposta.data.length; i++) {
        var item = resposta.data[i]
        
        var estaMarcado = ( item.feito == 1) ? 'checked' : '';

        linhas += `
            <tr>
                <td>
                <input type="checkbox" ${estaMarcado} onclick="toggleDisponivel(${item.id}, this.checked)">
                </td>
                <td>${item.nome}</td>
                <td>${item.categoria_nome || item.categoria_id}</td>
                <td><button onclick="deleteItens(${item.id})">Deletar</button></td>
            </tr>
        `
    }

    divResposta.innerHTML = `
        <table>
            <thead>
                <tr><th colspan="6"><center>Planos Cadastrados</center></th></tr>
                <tr>
                    <th>Realizado</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Opcoes</th>
                </tr>
            </thead>
            <tbody>${linhas}</tbody>
        </table>
    `
}

async function toggleDisponivel(id, marcado) {
    const valorStatus = marcado ? "1" : "0";

    try {
        await fetch('http://localhost/meus-planos-api/itens/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                feito: valorStatus 
            })
        });
        console.log("ID " + id + " atualizado para " + valorStatus);
    } catch (e) {
        console.error("Erro ao atualizar:", e);
    }
}

async function postItens() {
    if (!inputNome.value.trim()) {
        return
    }

    if (!inputCategoria.value) {
        return
    }

    await fetch('http://localhost/meus-planos-api/itens', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
            nome:         inputNome.value,
            categoria_id: inputCategoria.value,
        })
    })

    inputNome.value            = ''
    inputCategoria.value       = ''

    getItens()
}

async function deleteItens(id) {
    await fetch('http://localhost/meus-planos-api/itens/' + id, {
        method: 'DELETE'
    })

    getItens()
}

async function getCategorias() {
    var requisicao = await fetch('http://localhost/meus-planos-api/categorias')
    var resposta   = await requisicao.json()

    var select = document.getElementById('categoria')
    select.innerHTML = '<option value="">Selecione a categoria</option>'

    for (var i = 0; i < resposta.data.length; i++) {
        var cat    = resposta.data[i]
        var opcao  = document.createElement('option')
        opcao.value       = cat.id
        opcao.textContent = cat.nome
        select.appendChild(opcao)
    }
}
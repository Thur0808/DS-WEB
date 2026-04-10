// Carrega os planos ao abrir a página
document.addEventListener('DOMContentLoaded', carregarResumo)

async function carregarResumo() {
    try {
        // Faz a requisição para a API (ajuste a URL se necessário)
        const req      = await fetch('http://localhost/cafeteria-api/pedidos')
        const resposta = await req.json()

        const planos = resposta.data || []

        // --- Tabela de Planos Cadastrados ---
        const divTabela = document.getElementById('ultimos-planos')

        if (planos.length === 0) {
            divTabela.innerHTML = '<p style="text-align:center">Nenhum plano cadastrado ainda.</p>'
            return
        }

        // Gera as linhas da tabela seguindo a ordem da sua imagem
        const linhas = planos.map(p => `
            <tr>
                <td>${p.nome || p.cliente}</td>
                <td>${p.categoria}</td>
                <td>${p.disponivel == 1 ? '1' : '0'}</td>
                <td>
                    <button onclick="deletarPlano(${p.id})" class="button" style="font-size:13px; padding:5px 10px;">
                        Deletar
                    </button>
                </td>
            </tr>
        `).join('')

        // Monta a estrutura da tabela exatamente como na imagem
        divTabela.innerHTML = `
            <table class="tabela-estilizada">
                <thead>
                    <tr>
                        <th colspan="5" class="header-principal"><center>Planos Cadastrados</center></th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Disponivel</th>
                        <th>Opcoes</th>
                    </tr>
                </thead>
                <tbody>
                    ${linhas}
                </tbody>
            </table>
        `

    } catch (erro) {
        console.error('Erro ao carregar os planos:', erro)
        const divTabela = document.getElementById('ultimos-pedidos')
        divTabela.innerHTML = '<p style="text-align:center; color:red;">Erro ao conectar com o banco de dados.</p>'
    }
}

// Função para deletar (mantendo a base do seu projeto)
async function deletarPlano(id) {
    if(!confirm("Deseja realmente deletar este plano?")) return

    await fetch('http://localhost/cafeteria-api/pedidos/' + id, {
        method: 'DELETE'
    })
    
    carregarResumo() // Recarrega a lista
}
const tabelaAtividades = document.getElementById('tabelaAtividades').querySelector('tbody');

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td><input type="text" class="input-edit" placeholder="Nova Atividade" /></td>
        <td><input type="text" class="input-edit" placeholder="Tempo Estimado" /></td>
        <td><input type="text" class="input-edit" placeholder="Prioridade" /></td>
        <td><input type="text" class="input-edit" placeholder="Prazo" /></td>
        <td>
            <button class="btn-editar" onclick="editarTarefa(this)">Salvar</button>
            <button class="btn-excluir" onclick="excluirTarefa(this)">Excluir</button>
        </td>
    `;
    tabelaAtividades.appendChild(novaLinha);
}

// Função para editar e salvar uma tarefa
function editarTarefa(botao) {
    const linha = botao.closest('tr');
    const editando = botao.innerText === 'Salvar';

    if (editando) {
        // Troca de modo edição para visualização
        const inputs = linha.querySelectorAll('.input-edit');
        inputs.forEach(input => {
            const valor = input.value;
            const novaCelula = document.createElement('td');
            novaCelula.innerText = valor;
            input.closest('td').replaceWith(novaCelula);
        });
        botao.innerText = 'Editar';
    } else {
        // Troca de modo visualização para edição
        const celulas = linha.querySelectorAll('td:not(:last-child)');
        celulas.forEach(celula => {
            const valor = celula.innerText;
            celula.innerHTML = `<input type="text" class="input-edit" value="${valor}" />`;
        });
        botao.innerText = 'Salvar';
    }
}

// Função para excluir uma tarefa
function excluirTarefa(botao) {
    const linha = botao.closest('tr');
    tabelaAtividades.removeChild(linha);
}

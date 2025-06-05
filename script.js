const entradaTarefa = document.getElementById('entradaTarefa');
const listaTarefas = document.getElementById('listaTarefas');
 
let tarefas = JSON.parse(localStorage.getItem('tarefas')) ||  [];
let posicaoEditar = undefined

carregarTarefas(); 

function adicionarTarefa() {
    let texto = entradaTarefa.value.trim();
    if (texto !="") {
        if (posicaoEditar != undefined) {
            tarefas[posicaoEditar] = entradaTarefa.value;
            posicaoEditar = undefined;
        } else {
            tarefas.push(entradaTarefa.value);
        } 

        entradaTarefa.value = "";
        salvarTarefas();
        carregarTarefas();
    } else {
        alert("Tarefa inválida");
    }
}

entradaTarefa.addEventListener('keypress', function(tecla) {
    if(tecla.key === 'Enter') {
        adicionarTarefa();
    }
});

function carregarTarefas() {
    listaTarefas.innerHTML = '';
    tarefas.forEach((tarefa, posicao) => {
        const item = document.createElement('li');
        item.className = "item-lista";
        item.innerHTML = `
        <span class="item">${tarefa}</span>
        <button id="botaoRemover" onclick="editarTarefa(${posicao})">editar</button>
        <button id="botaoRemover" onclick="removerTarefa(${posicao})">X</button>
        `;
        listaTarefas.appendChild(item);
    });
}

function removerTarefa(posicao){
tarefas.splice(posicao , 1);
salvarTarefas();
carregarTarefas();
}

function salvarTarefas() {
    localStorage.setItem('tarefas',JSON.stringify(tarefas));
}

function editarTarefa(posicao) {
    posicaoEditar = posicao;
    entradaTarefa.value = tarefas[posicao];
}

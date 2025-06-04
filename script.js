const entradaTarefa = document.getElementById('entradaTarefa');
const listaTarefas = document.getElementById('listaTarefas');
 
let tarefas = JSON.parse(localStorage.getItem('tarefas')) ||  [];

carregarTarefas(); 

function adicionarTarefa() {
    let texto = entradaTarefa.value.trim();
    if (texto !="") {
        tarefas.push(entradaTarefa.value);;
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

const entradaTarefa = document.getElementById('entradaTarefa');
const listaTarefas = document.getElementById('listaTarefas');
 
let tarefas = [];

function adicionarTarefa() {
    let texto = entradaTarefa.value.trim();
    if (texto !="") {
        console.log(entradaTarefa.value);
        tarefas.push(entradaTarefa.value);
        let item = document.createElement('li');
        item.innerHTML = `<span>${entradaTarefa.value}</spans>`;
        entradaTarefa.value = "";
        listaTarefas.appendChild(item);
    } else {
        alert("Tarefa inválida");
    }
    
}

entradaTarefa.addEventListener('keypress', function(tecla) {
    if(tecla.key === 'Enter') {
        adicionarTarefa();
    }

});
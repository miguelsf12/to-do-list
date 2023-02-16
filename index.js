let inputTarefas = document.querySelector('#idtask') // INPUT ONDE ENTRA AS TAREFAS
let campTasks = document.querySelector('.campTasks') // ELEMENTO PAI ONDE FICARÁ AS TASKS
let tarefa = document.querySelector('.task') // div que contem toda a tarefa botao e texto



function inserirTask() {
    if (inputTarefas.value == "") {
        alert('Insira alguma tarefa abaixo para prosseguir.')
    } else {
        campTasks.innerHTML += `
    <div class="task">
        <li class="tarefa">${inputTarefas.value.toUpperCase()}</li>
        <div class="statusTask">
            <box-icon onclick="apagarConcluir()" name='check-square' type='solid' color='#00ff00' ></box-icon>
            <box-icon onclick="apagarConcluir()" name='x-square' type='solid' color='#ff0000' ></box-icon>
        </div>
    </div>`

        inputTarefas.value = ""
    }


}

// criar funcao para apagar e marcar como concluido
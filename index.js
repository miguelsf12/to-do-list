let inputTarefas = document.querySelector('#idtask') // INPUT ONDE ENTRA AS TAREFAS
let campTasks = document.querySelector('.campTasks') // ELEMENTO PAI ONDE FICARÁ AS TASKS

// INSERINDO TASKS

function inserirTask() {
    if (inputTarefas.value == "") {
        alert('Insira alguma tarefa abaixo para prosseguir.')
    } else {
        campTasks.innerHTML += `
        <div class="task">
            <li class="tarefa">${inputTarefas.value.toUpperCase()}</li>
            <div class="statusTask">
                <box-icon class="btnFinish" name='check-square' type='solid' color='#00ff00' ></box-icon>
                <box-icon class="btnDel" name='x-square' type='solid' color='#ff0000' ></box-icon>
            </div>
        </div>`

        inputTarefas.value = ""
    }
}

// APAGANDO TARERFAS & MARCANDO COMO CONCLUIDA

document.addEventListener("click", (e) => {
    const elementoAlvo = e.target
    const elementoProx = elementoAlvo.closest(".task") // minha div .task


    if (elementoAlvo.classList.contains("btnDel")) {
        setTimeout(() => {
            elementoProx.remove()
        }, 200);
    }

    if (elementoAlvo.classList.contains('btnFinish')) {
        elementoProx.classList.toggle('finish')
        setTimeout(() => {
            elementoProx.remove()
        }, 500);
    }

})
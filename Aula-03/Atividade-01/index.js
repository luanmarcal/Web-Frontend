const tarefasEl = document.querySelector('.tarefas')
//const tarefaEl = document.querySelector('.tarefa')
const botaoAddEl = document.querySelector('#botaoAdd')
const barraPesquisaEl = document.querySelector('#barraPesquisa')
// const botaoDelEl = document.querySelectorAll('.trashButton')

const numberPendentesEl = document.querySelector('.numberPendentes')
const numberCompletasEl = document.querySelector('.numberCompletas')

let text = "";
let completas = 0;
let pendentes = 0;

botaoAddEl.onclick = () => {
    console.log(barraPesquisaEl.value)
    text = barraPesquisaEl.value;
    apiCreateTask(text, false)
    MountTask(); 
}


async function MountTask() {
    let task = await apiGetTask();
    console.log(task);

    tarefasEl.innerText = "";

    task.forEach((task) => {
        let newTask = document.createElement('div')
        newTask.classList.add('tarefa')

        let taskDiv = document.createElement('div')
        newTask.appendChild(taskDiv);

        let check = document.createElement('input');
        check.type = 'checkbox';

        if (task.complete === true) {
            check.setAttribute('checked', task.complete);
            completas++;
        }
        else
            pendentes++;

        taskDiv.appendChild(check);

        let nameTask = document.createElement('label');
        nameTask.innerText = " " + task.description;
        taskDiv.appendChild(nameTask);

        let buttonTrash = document.createElement('button');
        buttonTrash.classList.add('trashButton')


        let iconTrash = document.createElement('img');
        iconTrash.src = "./trash.svg"
        iconTrash.setAttribute("taskId", task.id)

        buttonTrash.onclick = (event) => {
            console.log("del")
            console.log(event.target)
            const element = event.target
            const taskid = element.getAttribute("taskId")
            apiDeleteTasks(taskid);
            let taskElement = element.parentElement.parentElement
            tarefasEl.removeChild(taskElement)
            let check = element.parentElement.parentElement.firstChild.firstChild
            console.log(check)
            if(check.getAttribute(checked))
                completas--;
            else
                pendentes--;


            console.log(check)
  
            numberPendentesEl.innerText = pendentes;
        }
        
        buttonTrash.appendChild(iconTrash);

        newTask.appendChild(buttonTrash);

        tarefasEl.appendChild(newTask);
    })

    numberCompletasEl.innerText = completas;
    numberPendentesEl.innerText = pendentes;

    return console.log("foi o teste")

}

async function apiCreateTask(description, complete) {
    const url = 'http://localhost:3000/tasks'
    const newTask = { description, complete }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    }
    const response = await fetch(url, options)

    return console.log(await response.json())
}


async function apiGetTask() {
    const url = 'http://localhost:3000/tasks'

    const response = await fetch(url)

    return await response.json()
}


async function apiUpdateTask(id, complete) {

    const url = `http://localhost:3000/tasks/${id}`
    const newTask = { complete }
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    }
    const response = await fetch(url, options)

    switch (response.status) {
        case 204:
            return console.log("task modificada com sucesso")
        case 404:
            return console.log("task não encontrada")
    }

    return response;
}

async function apiDeleteTasks(id) {
    const url = `http://localhost:3000/tasks/${id}`
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    const response = await fetch(url, options)

    switch (response.status) {
        case 204:
            return console.log("task deletada com sucesso")
        case 404:
            return console.log("task não encontrada")
    }

    return response;
}
// apiCreateTask("task", false)

MountTask();

// apiUpdateTask(1, false)

// apiDeleteTasks(1);
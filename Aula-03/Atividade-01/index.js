const tarefaEl = document.querySelector('#tarefa')
const botaoAddEl = document.querySelector('#botaoAdd')
const barraPesquisaEl = document.querySelector('#barraPesquisa').value

botaoAddEl.onclick = console.log(document.querySelector('#barraPesquisa').value)


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

    return console.log(await response.json())
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

apiGetTask()

// apiUpdateTask(1, false)

// apiDeleteTasks(1);


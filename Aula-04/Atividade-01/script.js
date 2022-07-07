
const overviewEl = document.querySelector("#overview")

fetch(`https://api.github.com/users/luanmarcal/repos`)
    .then(response => {
        return response.json();
    })
    .catch(error => {
    })
    .then(response => {
        display(response)
    });

function display(response) {
    console.log(response);

    overviewEl.innerText = JSON.stringify(response);
}


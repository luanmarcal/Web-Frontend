
const overviewEl = document.querySelector("#overview")

fetch(`https://api.github.com/users/luanmarcal/repos`,
    {
        method: 'GET',
        // headers: {
        //     'Authorization': `token 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`
        // }
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        return console.error(error);
    })
    .then(response => {
        return response.forEach(display)
    });


function display(response) {
    console.log(response);

    JSON.stringify(response);

    let name = document.createElement('div')
    let linkName = document.createTextNode(response.html_url)
    let link = document.createElement('a')
    link.appendChild(linkName)

    link.title = response.html_url

    name.classList.add('name')
    link.classList.add('link')

    name.innerText = response.name;
    link.href = response.html_url
    link.target = "_blank"

    overviewEl.appendChild(name);
    overviewEl.appendChild(link);
}




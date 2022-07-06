const displayElement = document.getElementById("display");
// const display = document.querySelector("#display");

const buttonsElement = document.querySelectorAll(".btn");
// const btn_div = document.querySelector("#btn-div");

let display = "0"

buttonsElement.forEach((buttonElement) => {
    buttonElement.onclick = onButtonClickEvent
})

function onButtonClickEvent(event) {
    const buttonElement = event.target

    switch (buttonElement.innerText){
        case "C":
            limpaDisplay();
            break;
        case "=":
            calcularResultado();
            break;
        
        default:
            adicionaCaractere(buttonElement.innerText);
            break;
    }
    updateDisplay();
}

function limpaDisplay(){
    display = "0";
}

function calcularResultado(){
    try{
        display = eval(display);
    } catch(e){
        display = "err!!!"
    }

}

function adicionaCaractere(caractere){
    if(display === "0" && caractere !== ".")
        display = "";

    display += caractere;

}

function updateDisplay(){
    displayElement.innerText = display;
}

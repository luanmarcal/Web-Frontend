const count = document.querySelector(".count p")
const increment = document.querySelector(".increment")
const decrement = document.querySelector(".decrement")
const reset = document.querySelector(".reset")

reset.onclick = () =>{
    count.textContent=0;
}

increment.onclick = () =>{
    count.textContent=parseInt(count.textContent)+1;
}

decrement.onclick = () =>{
    count.textContent=parseInt(count.textContent)-1;
}
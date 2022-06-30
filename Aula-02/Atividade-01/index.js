const buttonEl = document.querySelector(".e101_22")
const secEl = document.querySelector(".e101_18")
const minEl = document.querySelector(".e101_13")
const hourEl = document.querySelector(".e101_8")
const textEl = document.querySelector(".e101_25")
let select;

let sec = 0;
let min = 0;
let hour = 0;
let flag = 0;


function adicionaSegundo() {
    sec += 1;

    if (sec >= 59) {
        sec = 0;
        min += 1;
    }

    if (min >= 59) {
        min = 0;
        hour += 1;
    }
}

buttonEl.onclick = () => {
    flag += 1

    if (flag == 1) {
        textEl.textContent = "Stop";
        buttonEl.classList.remove("color02")
        buttonEl.classList.remove("e101_22")
        buttonEl.classList.add("color")

        select = setInterval(() => {
            adicionaSegundo();
            secEl.textContent = ("00" + sec).slice(-2);
            minEl.textContent = ("00" + min).slice(-2);
            hourEl.textContent = ("00" + hour).slice(-2);

        }, 10)
    }

    if (flag == 2) {
        textEl.textContent = "Reset";
        buttonEl.classList.remove("e101_22")
        buttonEl.classList.remove("color")
        buttonEl.classList.add("color02")

        clearInterval(select)
    }

    if (flag == 3) {
        sec = 0;
        min = 0;
        hour = 0;
        flag2 = 0;
        flag = 0;

        textEl.textContent = "Start";
        buttonEl.classList.remove("color")
        buttonEl.classList.remove("color02")
        buttonEl.classList.add("e101_22")

        secEl.textContent = ("00" + sec).slice(-2);
        minEl.textContent = ("00" + min).slice(-2);
        hourEl.textContent = ("00" + hour).slice(-2);
    }

}





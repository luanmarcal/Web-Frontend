const soma = document.querySelector(".e109_43")
const sub = document.querySelector(".e109_41")
const div = document.querySelector(".e109_37")
const mult = document.querySelector(".e109_39")

const car_ig = document.querySelector(".e109_75")
const car_v = document.querySelector(".e109_69")
const car_c = document.querySelector(".e109_73")
const number0 = document.querySelector(".e109_71")
const number1 = document.querySelector(".e109_62")
const number2 = document.querySelector(".e109_64")
const number3 = document.querySelector(".e109_66")
const number4 = document.querySelector(".e109_55")
const number5 = document.querySelector(".e109_57")
const number6 = document.querySelector(".e109_59")
const number7 = document.querySelector(".e109_48")
const number8 = document.querySelector(".e109_50")
const number9 = document.querySelector(".e109_52")

const att_number = document.querySelector(".e109_33")

let value = 0;

car_ig.onclick = () =>{
    console.log("=");
    att_number.textContent = value;
}

car_v.onclick = () =>{
    att_number.textContent += ","
    console.log(",");
}

car_c.onclick = () =>{
    console.log("c");
}

//numeros

number0.onclick = () =>{
    att_number.textContent += "0"
    console.log("0");
}

number1.onclick = () =>{
    att_number.textContent += "1"
    console.log("1");
}

number2.onclick = () =>{
    att_number.textContent += "2"
    console.log("2");
}

number3.onclick = () =>{
    att_number.textContent += "3"
    console.log("3");
}

number4.onclick = () =>{
    att_number.textContent += "4"
    console.log("4");
}

number5.onclick = () =>{
    att_number.textContent += "5"
    console.log("5");
}

number6.onclick = () =>{
    att_number.textContent += "6"
    console.log("6");
}

number7.onclick = () =>{
    att_number.textContent += "7"
    console.log("7");
}

number8.onclick = () =>{
    att_number.textContent += "8"
    console.log("8");
}

number9.onclick = () =>{
    att_number.textContent += "9"
    console.log("9");
}




// simbolos

soma.onclick = () =>{
    att_number.textContent += "+"
    console.log("soma");
}

sub.onclick = () =>{
    att_number.textContent += "-"
    console.log("sub");
}

div.onclick = () =>{
    att_number.textContent += "/"
    console.log("div");
}

mult.onclick = () =>{
    att_number.textContent += "*"
    console.log("mult");
}


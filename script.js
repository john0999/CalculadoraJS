let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;

let numero1 = parseFloat(num1);
let numero2 = parseFloat(num2);

function sumar(){
    let suma = numero1 + numero2;
    document.getElementById("resultado").textContent = suma;
}

function dividir(){
    let div = numero1 / numero2;
    document.getElementById("resultado").textContent = div;
}

function  parImpar(){
    let numero = parseInt(prompt("Ingrese un número:"));
    if (numero % 2 == 0) {
        alert("El número es par.");
    } else {
        alert("El número es impar.");
    }
}

function imc(){
    let peso = parseFloat(prompt("ingresa tu peso:"));
    let altura = parseFloat(prompt("ingresa tu altura en cm:"));
    altura = altura / 100;
    let imc = peso / (altura * altura);
    if (imc < 18.5) {
        alert("bajo peso");
    } else if (imc >= 18.5 && imc <= 24.9){
        alert("peso normal");
    }else{
        alert("sobrepeso");
    }
}

function promedio() {
    let nota1 = parseFloat(prompt("Ingresa tu primera nota:"));
    let nota2 = parseFloat(prompt("Ingresa tu segunda nota:"));
    let nota3 = parseFloat(prompt("Ingresa tu tercera nota:"));
    let promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio < 4.0) {
        alert("Reprobado");
    } else {
        alert("Aprobado");
    }
}
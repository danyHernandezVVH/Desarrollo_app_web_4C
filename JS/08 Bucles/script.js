// Bucle While
// Contar del 10 al 1

function bucleWhile(){
    let count = 10;
    let array = [];
    while(count >= 1){
        array.push(count);
        count--;
    }
    alert(`Los numeros son: ${array.join(" - ")}`);
}

// Función con bucle for
function bucleFor(){
    let array = [];
    for(i = 10; i >= 1; i--){
        array.push(i); // Insertar valor en array
    }
    alert(`Los numeros son: ${array.join(" - ")}`);
}
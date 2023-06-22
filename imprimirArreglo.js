//Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento
// en una línea a parte:

// escribe tu respuesta acá

const imprimirArreglo=(arreglo)=>{
    return arreglo.filter(i=>console.log(i));
}

// código de prueba
console.log(imprimirArreglo([1, "Hola", 2, "Mundo"]))
// 1
// Hola
// 2
// Mundo
//Escribir una función llamada pares que reciba un arreglo de números y devuelva un 
//nuevo arreglo con los números pares únicamente.

// escribe tu función acá

const pares=(arreglo)=>{
    let nArreglo=arreglo.filter(num=>num%2==0);
    return nArreglo
}

// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([]))
console.log(pares([3, 6, 8, 1, 10, 11])) // []
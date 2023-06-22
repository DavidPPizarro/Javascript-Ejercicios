// Escribir una función llamada removerCeros que reciba un arreglo de números y 
//retorne un nuevo arreglo excluyendo los ceros (0).

// escribe tu respuesta acá
const removerCeros=(arreglo)=>{
    let nArreglo=arreglo.filter(num=>num>0);
    return nArreglo
}
// código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []
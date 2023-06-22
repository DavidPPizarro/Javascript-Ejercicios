//Escribir una función llamada duplicar que reciba un arreglo de números y devuelva un 
//nuevo arreglo donde cada número esté multiplicado por dos (2).

// escribe tu función acá
const duplicar=(arreglo)=>{
    return nArreglo=arreglo.map(num=>num*2);
}
// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []
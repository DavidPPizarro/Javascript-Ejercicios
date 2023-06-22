//Escribir una función llamada min que reciba un arreglo de números y 
//retorne el número mínimo:

//Nota: Intentarlo hacer sin el método Math.min de JavaScript.

// escribe tu función acá

const min=(arreglo)=>{
    let aux=99999;
    for (let index = 0; index < arreglo.length; index++) {
        if(aux>arreglo[index]){
            aux=arreglo[index];            
        }        
    }
    return aux;
}

// código de prueba
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2
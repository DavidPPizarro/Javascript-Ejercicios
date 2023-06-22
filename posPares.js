//Escribir una función llamada posiciones que reciba un arreglo de números y 
//devuelva un nuevo arreglo con las posiciones donde se encuentran números pares.

// escribe tu función acá

const posiciones=(arreglo)=>{
    let nArreglo=[];
    for (const key in arreglo) {
        if(arreglo[key]%2==0){
            nArreglo.push(parseInt(key));
        }
    }
    return nArreglo;
}

// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []
//Escribir una función llamada numAsteriscos que reciba un arreglo y devuelva el número 
//de asteriscos:

// escribe tu función acá

const numAsteriscos=(arreglo)=>{
    let count=0;
    for (let index = 0; index < arreglo.length; index++) {
        if(arreglo[index]=="*"){
            count+=1;
        }        
    }
    return count;
}

// código de prueba
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0
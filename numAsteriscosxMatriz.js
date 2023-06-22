//Escribir una función llamada numAsteriscos que reciba una matriz (un arreglo de arreglos) 
//y devolver el número de asteriscos:

// escribe tu función acá

const numAsteriscos=(arreglo)=>{
    let count=0;
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo[i].length; j++) {            
            if(arreglo[i][j]=="*"){
                count+=1;
            } 
        }        
    }
    return count;
}

// código de prueba
console.log(numAsteriscos([
  ['*', '', '*'],
  ['', '*', ''],
  ['*', '', '*']
]))
// 5
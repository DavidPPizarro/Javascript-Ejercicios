// Escribir una función llamada numeroDeAes que reciba un string y retorne el número 
//de veces que aparece la letra "a":

// escribe tu respuesta acá

const numeroDeAes=(strig)=>{
    let contador=0;
    for (let index = 0; index < strig.length; index++) {
        if(strig[index]=="a"){
            contador++;
        }        
    }
    return contador;
}

// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0
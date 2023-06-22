//Escribir una función llamada terminanConS que reciba un arreglo de cadenas y 
//devolver un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula).

// escribe tu función acá

const terminanConS=(arreglo)=>{
    return arreglo.filter(n=>n[(n.length)-1]=="s" || n[(n.length)-1]=="S");
}

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []
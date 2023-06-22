//Escribir una función llamada empiezanConA que reciba un arreglo de cuerdas y devolver 
//un nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula).

// escribe tu función acá

const empiezanConA=(arreglo)=>{
    return arreglo.filter(n=>n[0]=="a" || n[0]=="A");
}

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA(["Aguila", "Almendra", "Emanuel"])) // []
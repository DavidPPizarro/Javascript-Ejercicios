//Escribir una función llamada palabrasANumeros que reciba un arreglo de cadenas y 
//devolver un nuevo arreglo traduciendo cada palabra a su versión numérica (del 0 al 9). 
//Si la palabra no es un número traduce a -1.

// escribe tu función acá

const palabrasANumeros=(arreglo)=>{
    let nArregloNum=[];
    for (let index = 0; index < arreglo.length; index++) {
    let cadenaEntero=undefined;
    switch(arreglo[index]){
        case "cero": cadenaEntero=0; break;
        case "uno": cadenaEntero=1; break;
        case "dos": cadenaEntero=2; break;
        case "tres": cadenaEntero=3; break;
        case "cuatro": cadenaEntero=4; break;
        case "cinco": cadenaEntero=5; break;
        case "seis": cadenaEntero=6; break;
        case "siete": cadenaEntero=7; break;
        case "ocho": cadenaEntero=8; break;
        case "nueve": cadenaEntero=9; break;
        default: cadenaEntero=-1; break;
    }        
    nArregloNum.push(cadenaEntero);
    }
    return nArregloNum;
}

// código de prueba
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"]))// [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])) // [5, 6, 7, 8, 9]
//Escribir una función llamada numerosAPalabras que reciba un arreglo de 
//números (cada número en el rango de 0 a 0) y devolver un nuevo arreglo convirtiendo 
//cada número a su versión en palabras.

// escribe tu función acá

const numerosAPalabras=(arreglo)=>{
    let nArregloCad=[];
    for (let index = 0; index < arreglo.length; index++) {
    let numcadena="";
    switch(arreglo[index]){
        case 0: numcadena="cero"; break;
        case 1: numcadena="uno"; break;
        case 2: numcadena="dos"; break;
        case 3: numcadena="tres"; break;
        case 4: numcadena="cuatro"; break;
        case 5: numcadena="cinco"; break;
        case 6: numcadena="seis"; break;
        case 7: numcadena="siete"; break;
        case 8: numcadena="ocho"; break;
        case 9: numcadena="nueve"; break;
    }        
    nArregloCad.push(numcadena);
    }
    return nArregloCad;
}

// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]
// Escribir una función llamada password que reciba un string y devolver un nuevo 
//string realizando los siguientes cambios:

// Las mayúsculas se reemplazan por minúsculas.
// Se eliminan los espacios en blanco.
// Reemplace el carácter “a” por “4”.
// Reemplace el carácter “e” por “3”.
// Reemplace el carácter “i” por “1”.
// Reemplace el carácter “o” por “0”.
// escribe tu función acá

const password=(string)=>{
    let nPass="";
    if(string!=""){
        nPass=string.replaceAll("a","4");
        nPass=nPass.replaceAll("e", "3");
        nPass=nPass.replaceAll("i","1");
        nPass=nPass.replaceAll("o","0");
    }else{
        nPass=" "
    }
    console.log(nPass)
    return nPass
}

// código de prueba
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""

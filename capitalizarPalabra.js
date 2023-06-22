// Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:

// escribe tu función acá

const capitalizar=(string)=>{
    if(string!=""){        
        let s0=string[0];
        let nArr=Array.from(string);
        nArr.shift();
        let s0m=s0.toUpperCase();
        let cadena=nArr.toString().replace(/,/g,"");
        return s0m+cadena;
    }else{
        return " ";
    }  
}

// código de prueba
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""
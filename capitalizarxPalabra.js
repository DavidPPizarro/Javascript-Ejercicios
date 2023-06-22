//Escribir una función llamada capitalizar que reciba un string y
//capitalice la primera letra de cada palabra:

// escribe tu función acá

const capitalizar=(string)=>{
    let nStri=string.split(" ");
    console.log(nStri);
    let cadena="";
    if(string!=""){        
        for (let index = 0; index < nStri.length; index++) {
            let s0=nStri[index][0]; 
            let aux=Array.from(nStri[index]);
            aux.shift();        
            let s1=(s0+"").toUpperCase();
            cadena+=(s1)+aux.toString().replace(/,/g,"")+" ";
        }    
        return cadena;
    }else{
        return " ";
    } 
    
}

// código de prueba
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""
//Escribe una función llamada likes que reciba un número y retorne un string utilizando
//el formato de K para miles y M para millones.

//Por ejemplo:

// 1400 se convierte en 1K
// 34,567 se convierte en 34K
// 7’456,345 se convierte en 7M.
// Si el número es menor a 1000 se debe devolver el mismo número como un string.

// escribe tu respuesta acá

const likes = (num) =>{
    let num2=num.toString();
    if(num<1000){
        return `${num}`;
    }else if(num<10000){
        return num2.substring(0,1)+"K";
    }else if(num<100000){
        return `${num2.substring(0,2)}K`;
    }else if(num<10000000){
        return `${num2.substring(0,1)}M`;
    }else if(num<100000000){
        return `${num2.substring(0,2)}M`;
    }else{
        return num2;
    }
}


// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"
// Escribir una función llamada transcribir que reciba un string (una cadena de ADN) 
//y retorne otro string (su complemento ARN).

// Los complementos son los siguientes:

// G -> C
// C -> G
// T -> A
// A -> U
// escribe tu función acá
const transcribir=(adn)=>{
    let cadena="";
    for (const key of adn) {
        switch(key){
            case "A":cadena+="U";break;
            case "T":cadena+="A";break;
            case "C":cadena+="G";break;
            case "G":cadena+="C";break;
        }
    }
    return cadena;
}
// código de prueba
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"
//Escribir una función llamada contrasenaValida que reciba un string 
//y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". 
//De lo contrario debe retornar false.
function contrasenaValida(contra){
    let confirmacion;
    if(contra=="2Fj(jjbFsuj" || contra=="eoZiugBf&g9"){
        confirmacion=true;
    }else{
        confirmacion=false
    }
    return confirmacion;
}

console.log(contrasenaValida("2Fj(jjbFsuj"));
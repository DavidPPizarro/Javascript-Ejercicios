// Escribir una función llamada distancia que recibe dos cadenas y devolver el 
//número de caracteres diferentes (comparando posición por posición).

// Nota: Puedes asumir que las cuerdas siempre tienen la misma longitud. 
//Sin embargo, si quieres agregarle más dificultad puedes pensar cómo solucionarlo si 
//un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).

// escribe tu función acá

const distancia=(cadena1,cadena2)=>{
    let count=0;

    if(cadena1.length!=cadena2.length){
        count+=1;
    }
     
    for (let i = 0; i < cadena1.length; i++) {
        if(cadena1[i]!=cadena2[i]){
            count+=1;
        } 
              
    }
    return count;
}

// código de prueba
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3
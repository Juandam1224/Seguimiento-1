// Funciones 

//Variables 
let color = "Negro";
let Musicafavorita = "Hiphop"
let carrera = "Tecnologia en desarrollo de software"
const nombre = "Juan David"
const nacimiento = 2004;

//No Parametros
const radomNum = () => {
    let ranNum = Math.trunc(Math.random(100)*100);
    return ranNum
}
console.log("Su Numero Aletorio Es: " + radomNum());



//Un Parametro Opcion 1 
function cortaOlarga(palabra){
    if(palabra.length <= 5 ){
        console.log(`la palabra ${palabra} es corta`);
    }else{
        console.log(`la palabra ${palabra} es larga`);
    }
}
cortaOlarga ("Sol")
cortaOlarga ("Holacomoestas")

//Un Parametro Opcion 2
function cortaOlarga(palabra){
    const longitud = palabra.length;
    const mensaje = longitud <= 5 ? "Corta" : "Larga"
    console.log(`la palabra ${palabra} es  ${mensaje}`);
}
cortaOlarga ("Perro")
cortaOlarga ("Computadora")



//Dos parametros 
function esParOImpar (numero){
    if (numero % 2 === 0){
        return "Es un número Par";
    } else{
        return "Es un número Impar";
    }
}
console.log(esParOImpar(8));
console.log(esParOImpar(19));


// Punto Extra 
const binario = (a,b) => (a+b).toString(2);
console.log(binario(1,5));
console.log(binario(5,9));



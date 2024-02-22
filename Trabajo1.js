// Funciones 

//Variables 
let estatura = 1.75;
let peso = "60Kg"
let carrera = "Tecnologia en desarrollo de software"
const nombre = "Juan"
const nacimiento = 2004;

//No Parametros
const radomNum = () => {
    let ranNum = Math.trunc(Math.random(100)*100);
    return ranNum
}
console.log("Su Numero Aletorio Es: " + radomNum());



//Un Parametro 
const caluculadoraedad = añonacimiento => {
edad = 2024 - añonacimiento;
return edad
}
console.log("Su Edad Es: " + caluculadoraedad(2004));



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



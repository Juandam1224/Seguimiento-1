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


//Un Parametro 
const caluculadoraedad = añonacimiento => {
edad = 2024 - añonacimiento;
return edad
}

//Dos parametros 
const masamuscular = (peso,estatura) => {
    resultado = peso / (estatura**2);
    return resultado.toFixed(2);
}

console.log("Su Numero Aletorio Es: " + radomNum());
console.log("Su Edad Es: " + caluculadoraedad(2004));
console.log("Su Inidice De Masa Corporal Es: " + masamuscular(60, 1.75));
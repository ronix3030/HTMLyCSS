// Primer programa en javascript
console.log("Hola Mundo"); 

//VARIABLES
var variable1 = 5; // tipó entero
var variable2 = 24.5; // tipo decimales
var variable3 ="Hola"; // tipo texto
var variable4 = true; // tipo boleano 
const  miconstante =5;  // tipo const no se puede modificar 
console.log(variable1);
console.log("Mi edad es" + variable2);
// OPERACIONES
var result =5+5; // todo tipo de oracion
console.log(result);
// otro ejemplo:
var uno=3;
var dos=4;
var resul=uno+dos;
console.log(resul);
// CONDICIONALES
// ejemplo1;
let minumero=6;

if  (minumero==6) {
    console.log("Si es igual");
}
else{
    console.log("No es igual");
}
// ejemplo2;
// el operador && evalúa si ambas condiciones son verdaderas.
let minumero2=5;
let miletra2="Hola";
if (minumero2==5 && miletra2=="Hola"){
    console.log ("Es verdadero");   
}
else{
    console.log("No es Verdadero");
}
// ejemplo3;
//operador || evalúa si al menos una de las condiciones es verdadera, se ejecuta
let vari1=10;
let vari2=20;
if(vari1<=10 || vari2<15){
    console.log("Se cumple");
}
else{
    console.log("No se cumple");
        
    }
// ejemplo4:
// solo se ejecutara un bloque dentro de la condicion
let ol=100;
if(ol==100){
    let qw=50; let au=40;
    let result=qw+au;
    console.log("la suma es" + result);
}
else if(result<200){
    console.log("El resultado es menor a 100");
}
else{
    console.log("error")
}


//BUCLES
//el bucle while es una estructura de control que permite ejecutar repetidamente un bloque
// de código siempre que se cumpla una condición especificada
//WHILE
console.log("WHILE");   
let contador= 0
while(contador <4){
    console.log(contador);
    contador = contador +1
}
console.log("For")
// FOR
for (let contador2 = 0; contador2 < 3; contador2++) {
    console.log(contador2);
}

// FUNCIONES
function Saludar(nom,edad){
    console.log("Mi nombre es "+nom +"y mi edad es"+ edad );

}
Saludar ("Ronald ",24); 

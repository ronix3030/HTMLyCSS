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
console.log("--------------BUCLES-----------")
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
console.log("--------------FUNCIONES---------------")
console.log("Suma");
function Saludar(nom,edad){
    console.log("Mi nombre es "+nom +"y mi edad es"+ edad );
}
Saludar ("Ronald ",24); 
// otro ejemplo
console.log("Funcion multiplique") // modo simple 
function multi(uno,dos){
    console.log(uno*dos)
}
multi (20,20);
// Similar ejemplo
function multi2(one,two){
    result=one  * two;
    return result; // encadenar funciones 
}
let resultado=multi(2,2); // la variable let restringe el acceso osea solo existe dentro de la funcion
console.log (resultado);

//ARREGLOS O ARRAYS
// Los corchetes indican que se trata de un arreglo
console.log ("-----------ARRAYS------------");
let Miarreglo = ["Pablo","Maria","Juan","Perez","Luis"];
for (let i=0; i<4;i++ ){
    console.log ("Accediendo al indice" +i);
    let mostrar=Miarreglo[i];
    console.log (mostrar);  

}

//OBEJETOS
// las llaves significa objetos
console.log("------------OBJETOS------------")
let miobj={
    nombre:"David",
    edad:27,
    masculino:true,
};
miobj.nombre="Carlos" // cambiando una propiedad del obejto 
console.log (miobj);
let person2={
    nombre:"Ronald",
    edad:90,
    estadC:"Soltero",
    Genero:"Masculino",
};
person2.estadC="Casado";
console.log (person2);



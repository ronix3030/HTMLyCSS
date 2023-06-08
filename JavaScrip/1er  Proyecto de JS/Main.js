console.log("Starting")
// guardamo en un const la variable txtop1
// luego accedemos al document digitando getelementById esto selecciona entre id
// y dentro del parentecis ponemos el id del elemento
const txtop1 = document.getElementById("op1");
const txtoper = document.getElementById("operador");
const txtop2 = document.getElementById("op2");
const pres=document.getElementById("resultado");
const btncal = document.getElementById("calc");


function calcu(){
    const operador=txtoper.value;
    const operado1=parseFloat(txtop1.value);
    const operado2=parseFloat(txtop2.value);
    if(operador =="+"||operador =="-"||operador=="*"||operador=="/"){

        let resultado;
        switch(operador){
        case"+":
        resultado=operado1+operado2;
        break;
        case"-":
        resultado=operado1-operado2;
        break;
        case"*":
        resultado=operado1*operado2;
        break;
        case"/":
        resultado=operado1/operado2;
}
pres.innerText="Calculo Final " + resultado;

    }else{
        pres.innerText="Calculo Imposible"
    }}
btncal.addEventListener("click",calcu)
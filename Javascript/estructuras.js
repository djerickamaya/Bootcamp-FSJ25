//Estructuras de control -> CONDICIONALES

//IF -> evalua casos verdaderos
//IF ELSE -> evaluar casos verdaderos y falsos

/*
MAYOR QUE >
MENOR QUE <
MENOR O IGUAL <=
MAYOR O IGUAL >=

*/
let condicion = false;

if(condicion){
    console.log("este codigo se ejecuta en caso true");
    
}else{
    console.log("Este codigo se ejecuta si es false");
    
}

//Operador Ternaio -> REEMPLAZO DE SINTAXIS PARA EL IF ELSE
// CONDICION ? TRUE : CODIGO FALSE

10 < 10 ? console.log("Afirmativo") : console.log("Negativo");


//IF ELSEIF
let variableAux = 3;
if(variableAux > 10){
    console.log("Afirmativo");
}else if(variableAux > 5){
    console.log("Si es mayor");
}else{
    console.log("No cumplio las expectativas");
    
}
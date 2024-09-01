console.log("Prueba de impresion en la consola con archivo sintaxis");

// ----  Operadores Matemáticos -----

let suma = 2 + 2;
let resta = 4 - 2;
let division = 135 / 5;
let multiplicacion = 1354 * 356;
let residuo = 10 % 2;

console.log("La suma es: " + suma);
console.log(resta);
console.log(division);
console.log(multiplicacion);
console.log(residuo);

// Concatenancion -> unir dos valores y cualquiera de los dos es un string

let sumaFalsa = 2 + "2";
console.log(sumaFalsa);


// -----  Operadores logicos ------
// Ejecutamos comparciones de igualdad o desigualdad

let igualdad = 10 == "10";
console.log(igualdad);

//Igualdad Estricta === COMPARA EL VALOR DE LAS COSAS Y SU TIPO DE DATO

let igualdadEstricta = 10 === 10;
console.log(igualdadEstricta);

//Desigualdad
let desigualdad = 10 != "10";
console.log(desigualdad);

//Desigualdad Estricta  !== COMPARAMOS SI EL TIPO DE DATOS SON DIFERENTES
let desigualdadEstricta = 10 !== "10";
console.log(desigualdadEstricta);


//Para que el operador AND de TRUE ambas comparaciones deben ser TRUE
let operadorAND = 10 == "10" && 10 === "10";
console.log(operadorAND);

let operador2AND = 10 == "10" && 10 === 10;
console.log(operador2AND);

let operadorOR = 10 == "10" || 10 === "10";
console.log(operadorOR);


// FUNCIONES
//Declaracion de funciona
//Una funcion es: una porcion de codigo que hace algo en concreto
//Ventaja -> SE VUELVE REUTILIZABLE

//Declaracion de funcion
//Expresda TIPO DE DECLARACION DE FUCION
/** 
 function PALABRA RESERVADA NECESARIA PARA DECLARAR UNA FUNCION
 nombreFuncion ESTO ES REEMPLAZADO POR EL NOMBRE DE LA FUNCION
() SIRVE PARA RECIVBIR DATOS
{} DELIMITADORES DE CODIGO DE LA FUNCION
*/
function nombreFuncion(){

    console.log("Hola te saludo desde la funcion");
    
}

nombreFuncion();

//TIPOS DE FUNCION
//Tipo VOID -> Vacia

function tipoVoid(){
    console.log("soy una fucnion tipo VOID");
}
//tipoVoid();


//Tipo Return -> Devuelven VALOR
function tipoReturn(){
    return "soy una funcion tipo Return"
}

//tipoReturn();
//console.log(tipoReturn());

let ejecucion1 = tipoVoid();
let ejecucion2 = tipoReturn();
console.log(ejecucion1);
console.log(ejecucion2);


//FUNCIONES CON PARMETROS -> Funciones que trabajan con datos que vienen de fuera
//ERROR -> NaN NotANumber Cuando se intenta aplicar a un operador matematico

function sumar(num1,num2){
    return num1 + num2;
}

let resultado = sumar(15,5);
console.log(resultado);


//Funcion Flecha
//Declaracion 
function funcionExpresada{

}

/**
 * CONSTANTE nombreFuncion asignamosparametros flecha llaves CODIGO A EJECUTAR
 * const    funcionFlecha =     ()      =>   {   console.log()   }
 */
const funcionFlecha = (num1, num2) => {
    return num1-num2;
}

//CallBack -> RECIBE UNA FUNCION PARA PONERLA A FUNCIONAR
function funcionCallBAck(funcion){
    //Recibi una fucnion por tanto la ejecuto
    funcion();
}

function funcionAuxiliar(){
    console.log("Estoy funcionando pero desde el callback");
    
}

funcionCallBAck(funcionAuxiliar);

//CallBack con funcionaFlecha ANONIMA
funcionCallBAck( () => {console.log("te saludo desde la funcion flecha ANONIMA");
});

funcionCallBAck(function(){console.log(
    "Hola te saludo desde la funcion ANONIMA EXPRESADA");});
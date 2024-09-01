
// COMENTAR EN UNA LINEA -> DESACTIVA UN LINEA PARA EL ENTORNO DE EJECUCION
/*
    COMENTARIO
    MULTI
    LINEAS
*/



//El concepto del lenguaje
/*Caracteristicas:
*Tipo de tipado: Debilmente Tipado -> LA FORMA DE ESCRIBIR (Nos perdona errores)
-Tipado debil NO NECESITA:
-CIERRES INTRUCCION ;
-ACLARAR EL TIPO DE DATO DE LAS VARIABLES
*PARADIGMA DE PROGRAMACION -> FORMA DE ESCRIBIR EL CODIGO: Orientado a objetos(prototipos)
*FORMA DE ESCRIBIR CODIGO ES PROGRAMACION ESTRUCTURADA (FUNCIONES)
*ENTORNO DE EJECUCION: Interpretado (Ejecutado en el navegador)
*/

//Impresion

console.log(1);
//console.log(2);


//Tipos de datos
//Number
console.log(1);

//String puede ser comilla "" o ''
console.log("Hola");
console.log('Hola');

//Boolean
console.log(true);
console.log(false);


//Delclaración de variables, espacio en memoria
/*VAR vs LET
    VAR
    - Son redeclarables
    - Scope 
*/
var nombreVariable = false;
var nombre = "Jairo";
console.log(nombre);

/*  LET
        -NO son redeclarables
*/
let numero =1 ;
console.log(numero);
numero = 3;
console.log(numero);


/*CONSTANTE
    -no son redeclarables
    -no son mutables
*/
//ES ALGO NO MUTABLE EN TIEMPO DE EJECUCIÓN
const pi = 3.1416;
console.log(pi);
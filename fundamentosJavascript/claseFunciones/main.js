/**
 * FUNCIONES - Parámetros
 */

// // Declaración de mi funcion saludar
// function saludar(nombreUsuario){
//     console.log(typeof nombreUsuario)
//     if (typeof nombreUsuario === "string"){
//         console.log(`Hola, ${nombreUsuario}, bienvenido al sistema!`)
//     } else {
//         console.log("Esto no es un nombre valido")
//     }
//     console.log("Hola, " + nombreUsuario + ", bienvenido al sistema!")
//     console.log(typeof nombreUsuario)
// }

// // LLamado a la funcion saludar
// saludar(15);

// function obtenerNombreCompleto (nombre, apellido)
// {
//     let nombreCompleto = (`${nombre} ${apellido} `)

//     return nombreCompleto
// }


// console.log(obtenerNombreCompleto("Cleudy", "Garcia"))

/**
 * Funciones de primera clase
 * 
 * Cuando almacenas una funcion en una variable, esa variable se comporta como una funcion.
 * 
 * Cuando guardamos una funcion con parentesis, estamos ejecutando la funcion. 
 * Sin embargo, si no ponemos los parentesis, estamos guardando la funcion en una variable.
 */

/**
 * Funciones anonimas
 * 
 * 
 *  Tener pendiente la autoinvocacion de funciones	(Para declarar y ejecutar una función al mismo tiempo)
 */

/**
 * Las funciones se escriben como constantes, porque no se deben de reasignar.
 */

/**
 *  SCOPE DE LAS VARIABLES
 * SCOPE == ALCANCE
 * 
 * En esta clase, entenderemos el alcance de las variables. Tambien utilizando las const
 * Si utilizamos const, no podemos reasignar el valor de la variable en ningún momento 
 * del programa y esta misma toma en cuenta el scope.
 */

/**
 * FUNCIONES DE FLECHA - Arrow Functions
 * ==>
 * 
 *  Las funciones flecha se utilizan para retunar valores de una manera mas sencilla. 
 *  Cuando no necesita mucha logica en el programa
 */

// const sumar = function(a, b){
//     return a + b
// } 

// const restar = function (c, d){
//     return c - d
// }

// console.log(sumar(10,10))
// console.log(sumar(10,10))
// console.log(restar(10,10))


// Funcion sumar utilizando arrow function

const sumar = (a, b) => a + b



// Funcion para saludar usando arrow function

/** 
 * Siempre y cuando usemos un parametro, podemos obviar los parentesis
 * 
 * REGLA DE ORO, NO ESCRIBIR PARENTESIS CON UN SOLO PARAMETRO
*/

const saludar = nombreASaludar => console.log(`Queloqueeee ${nombreASaludar}`)

saludar('Jeffry')
saludar("Nuñe'")
saludar('Jeffry')


/** NOTA IMPORTANTE
 * 
 * TODO PROBLEMA GRANDE DEBEMOS DE PARTIRLO EN PEQUEÑAS PARTES
 * 
 * MIENTRAS MÁS PEQUEÑAS LAS FUNCIONES MEJOR
 * SI CRECE MUCHO TRATEMOS DE SEPARARLA EN MAS FUNCIONES
 * 
 * MIENTRAS MAS ATOMICAS Y MOLECULARES MEJOR
 * 
 */
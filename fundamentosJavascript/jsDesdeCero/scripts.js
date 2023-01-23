/**
 * Tipos de datos - Colección de datos
 */

/**
 * Objetos:
 * 
 * Coleciones de datos (informacion)
 * que tienen un identificador y un valor
 */

// Array (Arreglo)

// ["Cleudy", "Jeffry", "Nelson", "Vladimir", "Anderson", "Diego"]

// console.log( ["Cleudy", "Jeffry", "Nelson", "Vladimir", "Anderson", "Diego"])

// // Objetos JAVASCRIPT
// console.log({
//     nombre: "Jeffry",
//     apellido: "Sanchez"
// })

// TYPE COERTION JAVASCRIPT

// let a = 521
// let b = "422"

// let respuesta1 = (a + b)
// let respuesta2 = (a - b)

// console.log(`El resultado de "a" es: ${respuesta1} y el resultado de "b" es ${respuesta2}`)


// Recordar investigar sobre TypeCoertion

/**
 * CONDICIONALES
 */

/**
 *  Primer problema. Invitación a una fiesta
 *  Si eres mayor de edad y menor de 65 años puedes venir a la fiesta
 */
let nombre = prompt("¿Cuál es tu nombre?")
let edad = prompt("¿Cuál es tu edad?")

if (edad >= 18 && edad < 65) {
    console.log("Puedes venir a la fiesta")
    console.log(`Te esperamos, ${nombre}.`)
} else {
    console.log("No puedes venir a la fiesta, no cumples los requisitos de edad")
    console.log(`Lo sentimos, ${nombre}.`)
}
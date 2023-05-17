/**
 *  1   Metodo Every() =>
 *  se utiliza en arreglos para comprobar si todos los elementos
 *  cumplen una condición especificada. Retorna true si todos los elementos del
 *  arreglo cumplen la condición, de lo contrario, retorna false..
 *
 *  El propósito principal del método every() es realizar una evaluación sobre los elementos
 *  del arreglo y determinar si todos cumplen una determinada condición.
 *  Retorna true si todos los elementos cumplen la condición y false en caso contrario,
 *  sin modificar el arreglo original.*/

let numbers = [1,2,4,56,7,89,2,1,23];

numbers.every((num) => {
    return num === 2;
})

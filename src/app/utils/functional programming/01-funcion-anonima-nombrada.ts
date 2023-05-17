/**
 * 1 Funciones anónimas:
    - Una función anónima es aquella que no tiene un nombre identificador específico.
     En lugar de declararla con un nombre, se define directamente en el lugar donde
     se va a utilizar, como argumento de otra función o como expresión en una asignación
     de variable. Estas funciones son útiles cuando necesitas una función simple y no
     necesitas reutilizarla en otros lugares de tu código.
 * */

const suma = function(a: number, b: number) {
    return a + b;
};

console.log(suma(2, 3)); // Salida: 5

/**
 * 2 Funciones nombradas:
    - Las funciones nombradas son aquellas que se definen con un nombre identificador.
 * Pueden ser declaradas directamente o asignadas a una variable.
 * Estas funciones son útiles cuando necesitas reutilizar la misma lógica en
 * diferentes partes de tu código o cuando necesitas hacer referencia a la
 * función en sí misma.
 *
 *  *  En este caso, la función resta se declara con un nombre identificador y
 * se puede llamar utilizando ese nombre.
 * */

function resta(a: number, b: number) {
    return a - b;
}

console.log(resta(5, 3)); // Salida: 2

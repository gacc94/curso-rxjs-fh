/**
 * Funciones puras:
 * *    Una función pura es aquella que siempre produce el mismo resultado para los mismos datos de entrada y no tiene efectos secundarios observables.
 * *    El resultado de una función pura depende únicamente de sus argumentos y no de ningún estado externo o variable global.
 * *    No modifica los datos de entrada ni cualquier otro dato fuera de la función.
 * *    No realiza operaciones de entrada o salida, como leer o escribir en archivos o bases de datos.
 * *    Proporciona una buena transparencia referencial, lo que significa que se puede reemplazar una llamada a la función con su resultado sin cambiar el comportamiento del programa.

 Las funciones puras tienen varias ventajas:
 *
 * *    Son más fáciles de razonar y de entender, ya que su comportamiento es predecible y no depende de factores externos.
 * *    Son más fáciles de probar, ya que no requieren configuraciones o estados especiales para ejecutarse correctamente.
 * *    Facilitan el razonamiento sobre el código y permiten aplicar técnicas como memoización o evaluación perezosa.
 * *    Favorecen la modularidad y reutilización de código, ya que se pueden combinar y componer de manera segura.
 */

function sum(a: number, b: number) {
    return a + b;
}

/**  Funciones impuras:
 * *    Una función impura es aquella que puede producir diferentes resultados para los mismos datos de entrada o tiene efectos secundarios observables.
 * *    Su resultado puede depender de variables globales, estado externo mutable o de la interacción con el entorno.
 * *    Pueden realizar operaciones de entrada o salida, como leer o escribir en archivos o bases de datos.
 * *    Pueden modificar datos fuera de la función o introducir cambios en el estado global del programa.
 */

const some = () => Math.random();

some();
some();
some();

let total = 0;

function addToTotal(value: number) {
    total += value;
}
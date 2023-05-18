/**
 *
* La transparencia referencial es un concepto clave en la programación funcional que se
* refiere a la propiedad de una función de poder ser reemplazada por su valor de retorno
* sin cambiar el resultado del programa. En otras palabras, una función tiene transparencia
* referencial cuando siempre produce el mismo resultado para los mismos datos de entrada, sin
* importar el contexto en el que se llame.

Cuando una función tiene transparencia referencial, se puede confiar en que su comportamiento
* es predecible y consistente, lo que facilita la comprensión, el razonamiento y la depuración
* del código. Además, permite aplicar técnicas de optimización y simplificación en el proceso de
*  desarrollo.

* *   Para que una función sea transparente referencialmente, debe cumplir dos condiciones:

* *   Dado el mismo conjunto de argumentos, siempre debe producir el mismo resultado. Esto significa que el resultado de la función solo debe depender de sus argumentos y no de ningún estado externo o variable global. No debe haber efectos secundarios que modifiquen los resultados.

* *   La función no debe depender del contexto en el que se llama. Es decir, el resultado de la función debe ser el mismo sin importar el lugar en el programa donde se invoque. Esto implica que la función no debe acceder ni modificar ninguna variable mutable fuera de su alcance local.*/


const nums: number[] = [2,35,6,7,89,3];

function sorting(list: number[]) {
    return [...list].sort();
}

console.log(sorting(nums));
console.log(nums);
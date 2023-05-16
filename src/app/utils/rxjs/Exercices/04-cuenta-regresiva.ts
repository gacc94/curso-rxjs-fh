import {interval, map} from 'rxjs';
import {take} from "rxjs/operators";

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */
    // Salida esperada ===
    // 7
    // 6
    // 5
    // 4
    // 3
    // 2
    // 1
    // 0

const inicio = 7;
const countdown$ = interval(700).pipe(
    // reduce((acc, value) => [value, ...acc], []), // Acumula los valores en un array progresivamente
    map((value) => {
        return inicio - value
    }),
    take(inicio + 1), // Limita la cantidad de valores emitidos a 7

);


// No tocar esta línea ==================
countdown$.subscribe( console.log ); // =
// ======================================
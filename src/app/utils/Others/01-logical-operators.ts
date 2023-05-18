


const a = 9;
const isValid = () => ( a === 9 ) ? 'es 9' : 'no exist';


/**
*   1   El operador de conjunción ==>
representado por el símbolo &&, es un operador lógico  que se utiliza para
combinar múltiples condiciones y evaluar si todas ellas son verdaderas.
Retorna true si todas las condiciones son verdaderas, y false en caso contrario.

La evaluación del operador de conjunción sigue la siguiente regla:
*    * Si la primera condición es falsa, se detiene la evaluación y retorna false
 *    inmediatamente sin evaluar las demás condiciones.
*    * Si todas las condiciones son verdaderas, retorna true.*/

const condition1 = true;
const condition2 = false;
const condition3 = true;

const result: false  = condition1 && condition2 && condition3;

console.log(result); // Output: false


/**
 *
*       2 El operador de disyunción ==>
 * representado por el símbolo ||, es un operador lógico que se utiliza para combinar
 * múltiples condiciones y evaluar si al menos una de ellas es verdadera. Retorna true
 * si al menos una de las condiciones es verdadera, y false en caso contrario.

La evaluación del operador de disyunción sigue la siguiente regla:

*   * Si la primera condición es verdadera, se detiene la evaluación y retorna true
 *   inmediatamente sin evaluar las demás condiciones.
*   * Si todas las condiciones son falsas, retorna false.*/

const condition4: boolean = true;
const condition5: boolean = false;
const condition6: boolean = false;

const result2: boolean = condition4 || condition5 || condition6;

console.log(result2); // Output: true

/**
 *
 *       3 El operador de fusión de nulos (nullish coalescing operator) ===>
 en JavaScript se representa por ??. Este operador se utiliza para proporcionar
 un valor de respaldo (default) en caso de que un valor sea null o undefined.
 La sintaxis del operador de fusión de nulos es la siguiente: */

const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    cacheEnabled: false,
};

// Obtener los valores de configuración, pero proporcionar valores predeterminados en
// caso de que estén ausentes
const apiUrl = config.apiUrl ?? 'https://default-api.example.com';
const timeout = config.timeout ?? 3000;
const cacheEnabled = config.cacheEnabled ?? true;

console.log(apiUrl);         // Output: 'https://api.example.com'
console.log(timeout);        // Output: 5000
console.log(cacheEnabled);   // Output: false



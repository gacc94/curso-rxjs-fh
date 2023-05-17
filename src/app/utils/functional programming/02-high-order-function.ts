/**
 *  1 - Funciones de primer orden:
Las funciones de primer orden en programación funcional son aquellas que cumplen las
    siguientes características:
     - Pueden ser asignadas a variables y almacenadas en estructuras de datos.
     - Pueden ser pasadas como argumentos a otras funciones.
     - Pueden ser retornadas como resultados de otras funciones.

 *  2 - Funciones de orden superior:
Las funciones de orden superior son aquellas que cumplen al menos uno de los
 siguientes criterios:
    - Reciben una o más funciones como argumentos.
    - Devuelven una función como resultado.

Estas funciones se construyen a partir de funciones de primer orden y
 proporcionan una abstracción poderosa en programación funcional. Permiten
 escribir código más modular, expresivo y reutilizable al separar las operaciones
 en funciones más pequeñas y componibles.
En el ejemplo anterior, las funciones map y filter son ejemplos de funciones de orden superior.
 Ambas reciben una función como argumento (duplicar y esMayorQueTres, respectivamente) y
 devuelven una nueva función que se aplica a los elementos de la lista.*/


export interface Beer{
    name: string;
    alcohol: number;
}

const data = [
    {
        name: 'corona',
        alcohol: 75.5
    },
    {
        name: 'Pilsen',
        alcohol: 71
    },
    {
        name: 'delirium',
        alcohol: 75.5
    },
    {
        name: 'cristal',
        alcohol: 75.5
    },
    {
        name: 'brhama',
        alcohol: 75.5
    },
    {
        name: 'negra',
        alcohol: 75.5
    },

]

function getInfo(beers: Beer[], fn: (b: string[]) => void){
    const beersInfo = beers.map(e=>`cerveza: ${e.name} con alcohol ${e.alcohol}`)
    return fn(beersInfo);
    // return (b: number): void => {  }
}

function show(beers: string[]){
    beers.forEach((el) => {
        console.log(el);
    })
}

function showOrdered(beers: string[]) {
    beers.sort().forEach((item, index) => {
        console.log(`${index+1} - ${item}`)
    })
}

getInfo(data, show);
getInfo(data, showOrdered);
import {fromEvent, map, mapTo, pluck, range} from "rxjs";

export const range$ = range(1,5);
export const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

/* ========================
            MAP
===========================*/

/*
* el valor tranformado de una data
* */
range$.pipe(
    map<number, string>(res => `${res*2}`)
)
.subscribe({
    next: (value) => {
        console.log(value)
    }
})
/* ========================
            PLUCK
===========================*/
/*
* Devuelve el valor de la Key de un Objeto
* */
keyUp$.pipe(
    pluck<KeyboardEvent>('target', 'baseURI'),
).subscribe({
    next: (value) => {
        console.log(value);
    }
})

/* ========================
            MAPTO
===========================*/

keyUp$.pipe(
    mapTo('Tecla Presionada')
).subscribe({
    next: (value) => {
        console.log(value)
    }
})













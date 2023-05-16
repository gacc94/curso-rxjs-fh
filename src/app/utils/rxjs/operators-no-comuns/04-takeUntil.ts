import {fromEvent, interval, skip, takeUntil, tap} from "rxjs";

const button = document.createElement('button');
button.innerHTML = 'Stop Timer';
document.querySelector('.lastParagraph')?.append(button);

/*
* Skip => Este operador recibe como parametro un number , que indica las veces q sera manipulara
* el elemento, luego de ello deja de emitirse completa el flujo de datos.
* */
const click$ = fromEvent(button, 'click').pipe(
    tap(()=>console.log('tap antes del skip')),
    skip(1),
    tap(()=>console.log('tap despues del skip')),

);

const counter$ = interval(1000);

/*
* TakeUntil => Este operador recibe como parametro un observable, y completa la emision de datos
* cuando se emite el primer valor del observable q recibio como parametro
*
* */

counter$.pipe(
    takeUntil(click$),
).subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => console.log('complete')
})
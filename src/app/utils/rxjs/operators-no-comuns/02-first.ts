import {first, fromEvent, map, take} from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

/*
* Take => Este operador luego de emitir el primer valor completa la subscripcion, luego ya deja de
* emitirse valores y se desuscribe automaticamente.
* */

click$.pipe(
    // take(2),
    map((event: MouseEvent) => {
        const {clientY, clientX} = event;
        return {clientX, clientY}
    } ),
    first((value)=>value.clientY >=150),
)
    .subscribe({
        next: (value) => {
            console.log(value);
        }
    })
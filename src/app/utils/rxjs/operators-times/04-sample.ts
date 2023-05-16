import {fromEvent, interval, sample} from "rxjs";

const interval$ = interval(500);
const click$ = fromEvent(document, 'click');
/*
* Sample => es un operador de tiempo que recibe como parametro un observable,
* cuando el observable que recibe como parametro emite el primer valor, el observable padre,
* emitira el valor en el cual se encuentra acutlamente.
 * */
interval$.pipe(
    sample(click$,)
).subscribe(console.log);
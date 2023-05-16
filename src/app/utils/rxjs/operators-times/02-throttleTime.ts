import {asyncScheduler, debounceTime, distinctUntilChanged, fromEvent, pluck, throttleTime} from "rxjs";

const input = document.createElement('input');
document.querySelector('.lastParagraph')?.append(input);
const click$ = fromEvent(input, 'keyup')
/*
* throttleTime => es un operador de tiempo que limita la velocidad de emisión de valores
* de un observable, es decir, emite el primer valor que recibe y luego, durante un tiempo
* determinado, ignora
* todos los valores que llegan y emite el siguiente valor después de ese tiempo.
 * */
click$.pipe(
    throttleTime(400, asyncScheduler, {
        leading: true,
        trailing: true,
    }),
    pluck('target','value'),
    distinctUntilChanged(),
).subscribe(console.log);
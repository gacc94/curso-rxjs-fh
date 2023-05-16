import {debounceTime, distinctUntilChanged, fromEvent, pluck} from "rxjs";

const input = document.createElement('input');
document.querySelector('.lastParagraph')?.append(input);
const click$ = fromEvent(input, 'keyup')
/*
* DebounceTime => Recibe como parametro un number en milisegundos, que emitira el dato en tiempo ingresado
* y devolvera un observable con el dato emitido
 * */
click$.pipe(
    debounceTime(1000),
    pluck('target','value'),
    distinctUntilChanged(),
).subscribe(console.log);
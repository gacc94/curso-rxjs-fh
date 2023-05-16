import {first, fromEvent, map, takeWhile} from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click')

/*
* TakeWhile =>  se utiliza  para emitir elementos de un flujo de
* datos mientras se cumple una condición determinada. Una vez que la condición no se
* cumple más, el flujo de datos se completa y se detiene la emisión de elementos.
* */

click$.pipe(
    // take(2),
    map(({x,y}) => ({x, y})),
    // first((value)=>value.clientY >=150),
    takeWhile((y) => y.y <= 150, true)
).subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => console.log('complete')
})

import {endWith, interval, take} from "rxjs";

const numbers$ = interval(100).pipe(take(4));
/**
 *  EndWith ==> se utiliza para agregar un valor al final a un flujo de datos.
 *  Este valor inicial se emite antes de que se emitan los valores del flujo de
 *  datos original*/

numbers$.pipe(endWith(5,2)).subscribe({
    next: (value) => {
        console.log(value);
    }
});

numbers$.subscribe({
    next: (value) => {
        console.log(value);
    }
});
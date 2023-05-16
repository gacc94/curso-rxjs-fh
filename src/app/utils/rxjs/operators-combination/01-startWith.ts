import {interval, startWith, take} from "rxjs";

const numbers$ = interval(100).pipe(take(4));

/**
 *  StartWith ==> se utiliza para agregar un valor inicial a un flujo de datos.
 *  Este valor inicial se emite antes de que se emitan los valores del flujo de
 *  datos original*/

numbers$.pipe(startWith(1)).subscribe({
    next: (value) => {
        console.log(value);
    }
});

numbers$.subscribe({
    next: (value) => {
        console.log(value);
    }
});
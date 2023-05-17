import {distinctUntilChanged, from, of} from "rxjs";

/**
 *
* DistinctUntilChanged => evalua si el dato anterior ya fue emitido, si es un true ,
* completa continua emitiendo los datos, hasta llegar al ultimo.
 * */
const heroes = [
    {
        name: 'a'
    },
    {
        name: 'b'
    },
    {
        name: 'c'
    },
    {
        name: 'b'
    },
    {
        name: 'b'
    },
    {
        name: 'd'
    },
]

const  numbers$ = of(1,2,3,'3',3);


numbers$.pipe(
    distinctUntilChanged()
).subscribe(console.log);

from(heroes).pipe(
    distinctUntilChanged((ant, act) => {
        return ant.name === act.name
    })
).subscribe({
    next: (value) => {
        console.log(value.name)
    }
});
import {distinctUntilChanged, distinctUntilKeyChanged, from} from "rxjs";

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
/*
* DistinctUntilKeyChanged => Recibe como parametro el key de un objeto, evalua
* si el dato anterior ya fue emitido respecto al key,
* si es un true ,omite ese dato, continua emitiendo los datos, hasta llegar al ultimo.
 * */
from(heroes).pipe(
    distinctUntilKeyChanged( 'name')
).subscribe({
    next: (value) => {
        console.log(value.name)
    }
});
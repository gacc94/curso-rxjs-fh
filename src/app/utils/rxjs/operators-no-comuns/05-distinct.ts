import {distinct, from, of} from "rxjs";

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
        name: 'a'
    },
]

const  numbers$ = of(1,2,3,'3',3);
/*
* Distinct => evalua si el dato ya fue emitido, si es un true , completa la emision de datos
 * */
numbers$.pipe(
    distinct()
).subscribe(console.log);

from(heroes).pipe(
    distinct((x)=>x.name)
).subscribe({
    next: (value) => {
        console.log(value.name)
    }
});
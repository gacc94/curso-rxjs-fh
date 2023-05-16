import {asyncScheduler, filter, from, map, range} from "rxjs";
import {keyUp$} from "@utils/rxjs/operators/01-map-pluck-mapTo";

export const rangeFilter$ = range(1,10, asyncScheduler);

rangeFilter$.pipe(
    filter((val: number, index: number) => {
        return val%2===index;
    }),
).subscribe({
    next: (value: number) => {
        console.log(value)
    }
})

const heroes = [
    {
        type: 'hero',
        name: 'Batman'
    },
    {
        type: 'hero',
        name: 'Robin'
    },
    {
        type: 'villain',
        name: 'Joker'
    }
]

from(heroes).pipe(
    filter((data, i) =>{
        return data.type === 'hero';
    })
).subscribe({
    next: (value) => {
        console.log(value);
    }
})
/* =====================================
            CADENAS DE OPERATORS
========================================*/
keyUp$.pipe(
    map(event => event.code),
    filter((value, i) => value==='Enter' )
).subscribe({
    next: (value) => {
        console.log(value)
    }
})

import {asyncScheduler, from, interval, map, reduce, scan, take, tap} from "rxjs";

// interface Usuario {
//     id?: string;
//     autenticado?: boolean;
//     token?: string;
//     edad?: number;
// }
//
// const user: Usuario[] = [
//     { id: 'fher', autenticado: false, token: null },
//     { id: 'fher', autenticado: true, token: 'ABC' },
//     { id: 'fher', autenticado: true, token: 'ABC123' },
// ];
//
// const state$ = from( user ).pipe(
//     scan<Usuario, any>( (acc: any, cur: any) => {
//         return { ...acc, ...cur }
//     }, { edad: 33 })
// );
//
// const id$ = state$.pipe(
//     map( (state: { id: any; }) => state.id )
// );
//
// id$.subscribe( console.log );

const numbers = [1,2,3,4,5,6];

const totalReducer = (acc: number, value: number): number => acc + value;

const total = numbers.reduce(totalReducer,0);
console.log('total arr: ' + total);

from(numbers).pipe(
    reduce(totalReducer, 0)
).subscribe({
    next: value => {
        console.log(value)
    }
})

interval(100,asyncScheduler).pipe(
    tap(console.log),
    take(10),
    reduce(totalReducer,0)
).subscribe({
    next: (value): number => {
        console.log(`reduce:`+value);
        return 1;
    }
})
interval(100,asyncScheduler).pipe(
    tap(console.log),
    take(10),
    scan(totalReducer,0)
).subscribe({
    next: (value): number => {
        console.log(`scan:`+value);
        return 1;
    }
})
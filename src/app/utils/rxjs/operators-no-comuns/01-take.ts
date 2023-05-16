import {of, take, tap} from "rxjs";

const  numbers$ = of(1,2,3,);

numbers$.pipe(
    take(2),
).subscribe({
    next: console.log,
    error: console.error,
    complete: console.table,
})
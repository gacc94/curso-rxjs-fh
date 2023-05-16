import {asyncScheduler, Observable, of, range} from "rxjs";

export const src$: Observable<number> = of(...[1,2,3,4],1,2,3,4,5,6);
/*
* create un observable aprtir de un rango de valores
* */
export const src2$: Observable<number> = range(-1.5,5, asyncScheduler);

src2$.subscribe({
    next: value => {
        console.log(value);
    }
})
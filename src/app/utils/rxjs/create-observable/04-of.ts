import {Observable, of} from "rxjs";

// export const of$: Observable<number> = of(...[1,2,3,4],1,2,3,4,5,6);
// export const of$: Observable<number> = of(...[1,2,3,4],1,2,3,4,5,6);
export const of$: Observable<any> = of(...[1,2,3,4],{a:1, b:2}, ()=>{}, Promise.resolve(2));

of$.subscribe({
    next: (value) => {
        console.log(value);
    }
})

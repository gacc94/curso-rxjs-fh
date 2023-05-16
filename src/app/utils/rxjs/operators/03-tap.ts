import {asyncScheduler, map, range, tap} from "rxjs";

export const rangeTap$ = range(1,10);

rangeTap$.pipe(
    tap(({
        next: (value) => {
            console.log(value)
        }
    }))
);
rangeTap$.pipe(
    tap((value) => {console.log(`Tap1: ${value}`); return 100}),
    map((x)=> x/10),
    tap((value) => {console.log(`Tap2: ${value}`); return 100}),

).subscribe({
    next: (value) => {
        console.log(value)
    }
});
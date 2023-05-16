import {asyncScheduler, interval, Observable, timer} from "rxjs";
import {observer} from "@utils/rxjs/observe";

export const interval$: Observable<number> = interval(1000);


export const hoyEn5Seg = new Date();
hoyEn5Seg.setSeconds( hoyEn5Seg.getSeconds() + 5 );

// export const timer$ = timer(2000, 1000);
export const timer$ = timer(hoyEn5Seg);

interval$.subscribe(observer);
timer$.subscribe(observer);
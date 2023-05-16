import {fromEvent, interval, mergeMap, Observable, of, take, takeUntil, tap} from "rxjs";
import {IPost} from "../../../interfaces/post.interface";

const letters$ = of('1',2,3);
const mouseDown$ = fromEvent(document,'mousedown');
const mouseUp$ = fromEvent(document,'mouseup');
const interval$ = interval();

letters$.pipe(
    mergeMap(() => interval(100).pipe(
        take(3)
    ))
).subscribe({
    next: (value) => {
        console.log('next: ', value)
    },
    complete: () => console.log('complete'),
})

mouseDown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil(mouseUp$)
    ) )
).subscribe({
    next: (value) => {
        console.log('next: ', value)
    },
    complete: () => console.log('complete'),
})

const numbers$ = of(1,2,3);
/*
* MergeMap ==> e utiliza para realizar una transformación compleja en cada valor
*  emitido por un observable, en la que se genera un nuevo observable
*  para cada valor y luego se fusionan estos observables en uno solo.
* */
numbers$.pipe(
    // debounceTime<number>(500),
    tap((val)=>console.log('antes: '+val)),
    mergeMap<number,Observable<Array<IPost>> >((val) => {
        return getPosts(val);
    }),
    // tap((val)=>console.log('despues: '+val[0].id)),
).subscribe({
    next: (value) => {
        console.log('next: ', value)
    },
    complete: () => console.log('complete'),
})

function getPosts(id: string | number): Observable<Array<IPost>>{
    // @ts-ignore
    return this._http.get<Array<IPost>>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
}
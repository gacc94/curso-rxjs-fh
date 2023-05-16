import {Observable, of, switchMap, tap} from "rxjs";
import {IPost} from "../../../interfaces/post.interface";

const numbers$ = of(1,2,3);
/*
* SwitchMap ==>es uno de los operadores de aplanamiento (flatmap) en RxJS que se
*  utiliza para transformar los valores emitidos por un observable en otro o
* bservable y asegurarse de que solo se suscriba a la última emisión.

-Cuando se utiliza switchMap, se emite un observable interno para cada emisión
* del observable origen, y se cancela cualquier suscripción anterior cuando se
* emite una nueva emisión. Esto significa que solo se maneja la última emisión, y
* no se mantienen varias suscripciones abiertas al mismo tiempo.
* */
numbers$.pipe(
    // debounceTime<number>(500),
    tap((val)=>console.log('antes: '+val)),
    switchMap<number,Observable<Array<IPost>> >((val) => {
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
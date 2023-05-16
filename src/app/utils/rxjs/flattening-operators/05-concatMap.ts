import {concatMap, fromEvent, interval, Observable, switchMap, take} from "rxjs";
import {IPost} from "../../../interfaces/post.interface";


const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');
/*
* ConcatMap ==>  espera a que un observable secundario complete su emisión antes de
*  suscribirse al siguiente observable proyectado.
*  De esta manera, garantiza que el orden de los valores de origen
* se respete en el resultado final.
* */
interval$.pipe(
    concatMap((val)=> getPosts(val))
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
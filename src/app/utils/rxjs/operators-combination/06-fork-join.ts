import {catchError, delay, forkJoin, interval, Observable, of, take} from "rxjs";
import {IPost} from "../../../interfaces/post.interface";
import {inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";

const _http = inject(HttpClient);

const numbers$ = of(1,2,3,4);
const interval$ = interval(1000).pipe(take(3));
const letters$ = of('a','b', 'c', 'd');

/**
 * A diferencia del operador combineLatest, que combina los valores más recientes
 * de los observables de origen cada vez que uno de ellos emite un nuevo valor,
 * forkJoin espera a que todos los observables se completen para emitir el
 * arreglo final de valores.*/


const getPosts = (id: string| number): Observable<Array<IPost>> => {
    return _http.get<Array<IPost>>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
}

forkJoin({
    num: numbers$,
    int: interval$,
    letter: letters$,
}).subscribe({
    next: (value) => {
        console.log( value)
    }
})

forkJoin({
    post1: getPosts(1).pipe(delay(1000)),
    post2: getPosts(3),
}).pipe(
    catchError((err) => of(err))
).subscribe({
    next: (values) => {
        const arr = <IPost[]>values?.post1;
        arr.forEach((el: IPost)=> {
            console.log(el.email)
        })
    }
})


import {debounceTime, distinctUntilChanged, map, mergeAll, Observable} from "rxjs";
import {IPost} from "../../../interfaces/post.interface";

import {HttpClient} from "@angular/common/http";
import {inject} from "@angular/core";
import {FormControl} from "@angular/forms";
const _http = inject(HttpClient);

const fieldName: FormControl= new FormControl('');
/*
        * MergeAll ==>  es un operador de aplanamiento (flattening) en RxJS que se utiliza para
        * fusionar (merge) los valores emitidos por una fuente de observables
        * que emite otros observables.
        * */

fieldName.valueChanges.pipe(
    debounceTime<string>(500),
    distinctUntilChanged<string>(),
    map<string, Observable<Array<IPost>>>((val: string) => getPosts(val)),
    mergeAll<Observable<Array<IPost>>>(),
).subscribe({
    next: (value): void => {
        // this.fieldName.setValue('');
        console.log(value)
    },
    complete: () => console.log('complete')
})

function getPosts(id: string): Observable<Array<IPost>>{
    // @ts-ignore
    return this._http.get<Array<IPost>>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
}
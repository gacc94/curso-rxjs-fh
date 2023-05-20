import {inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class RequestHTTP<T> {

    protected readonly http: HttpClient = inject(HttpClient);
    protected url: string = '';

    protected constructor(
       name : string,
    ) {}


    getAll(): Observable<T>{
        return this.http.get<T>(`${this.url}`);
    }

    getById<T,R>(id: R): Observable<T>{
        return this.http.get<T>(`${this.url}/${id}`);
    }

    deleteById<R>(id: R): Observable<any> {
        return this.http.delete(`${id}`);
    }

}
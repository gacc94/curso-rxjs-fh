import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {inject} from "@angular/core";

export interface IUser {
    id: string;
    name: string;
}
export interface IPatron extends Omit<IUser,'id'>{

}

abstract class RequestHTTP<R extends IUser> {

    private readonly http = inject(HttpClient);

    getAll<R>(): Observable<R>{
        return this.http.get<R>(``);
    }

    getById<T,R>(id: R): Observable<T>{
        return this.http.get<T>(`/${id}`);
    }

}

export class UserServ extends RequestHTTP<IUser> {
    constructor(http: string) {
        super();
    }

}

const user = new UserServ('');

user.getAll<string>();
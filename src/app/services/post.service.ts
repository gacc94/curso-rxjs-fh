import {Injectable} from "@angular/core";
import {RequestHTTP} from "./request-generic.service";
import {Observable} from "rxjs";
import {IPost} from "../interfaces/post.interface";

@Injectable({
    providedIn: 'root'
})
export class PostService extends RequestHTTP<any>{

    constructor(name : string) {
        super(name);
        this.url = 'https://reqres.in/api/users';
    }

    // set urlAPI(url: string) {
    //     this._url = url;
    // }
    // get getUrl(): string{
    //     return this._url;
    // }

    override getAll(): Observable<any> {
        return super.getAll();
    }

}
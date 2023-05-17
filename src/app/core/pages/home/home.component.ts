import {AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressBarModule} from "@angular/material/progress-bar";

import {MatButtonModule} from "@angular/material/button";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormControl, FormsModule, ReactiveFormsModule,} from "@angular/forms";
import {IPost} from "../../../interfaces/post.interface";
import {
    fromEvent, map,
    Observable,
    pluck, tap,
} from "rxjs";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        MatProgressBarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {

    private readonly _http: HttpClient = inject<HttpClient>(HttpClient);
    @ViewChild('name', {static: true}) name          !: ElementRef;
    @ViewChild('password', {static: true}) password  !: ElementRef;
    private isValid: boolean = true;

    fieldName: FormControl = new FormControl('');
    fieldPassword: FormControl = new FormControl('');

    constructor() {
    }

    ngOnInit(): void {
        const numbers = [1,2,43,5,76,1];
        numbers.every( (number) => number);

        const isUnion = numbers.join(',')


        console.log(isUnion);




    }

    getPosts(id: string | number): Observable<Array<IPost>> {
        return this._http.get<Array<IPost>>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    }

    getDataApi(res: number) {
        return (res: number): string => {
            return `value: ${res}`
        }
    }

    getDataJson(): Observable<any[]>{
        return this._http.get<any[]>('assets/data.json');
    }

    onInput($event: Event): void {
        const evt: InputEvent = <InputEvent>$event;
        // console.log(evt)
    }

    getInputStream(el: any) {
        return fromEvent(el, 'keyup').pipe
        (pluck('target', 'value')
        )
    }

    ngOnDestroy() {
    }

    ngAfterViewInit(): void {


    }

}


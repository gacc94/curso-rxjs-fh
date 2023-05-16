import {AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressBarModule} from "@angular/material/progress-bar";

import {MatButtonModule} from "@angular/material/button";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormControl, FormsModule, ReactiveFormsModule,} from "@angular/forms";
import {IPost} from "../../../interfaces/post.interface";
import {fromEvent, interval, Observable, pluck, timer, combineLatest, zip, catchError, of, switchMap} from "rxjs";
import {map, take} from "rxjs/operators";

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


    fieldName: FormControl = new FormControl('');
    fieldPassword: FormControl = new FormControl('');

    constructor() {
    }

    ngOnInit(): void {
        const obj = {
            name: "Human",
            classification: "mammal",
            designation: "sentient",
            average_height: "180",
            skin_colors: "caucasian, black, asian, hispanic "
        }

        zip(interval(100), interval(100)).pipe(take(10)).subscribe(console.log);

        this.getPosts(1).pipe(
            switchMap((val) => this.getPosts(val[0].id)),
            catchError(err => of({err})),
        ).subscribe(console.log)


    }

    getPosts(id: string | number): Observable<Array<IPost>> {
        return this._http.get<Array<IPost>>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    }

    getDataApi(){
        return this._http.get(`https://swapi.dev/api`);
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


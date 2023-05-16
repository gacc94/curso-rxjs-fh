import {Component, ElementRef, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {fromEvent, map, Observable, shareReplay} from "rxjs";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [
        CommonModule,
        MatSidenavModule,
        RouterModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatButtonModule],
    templateUrl: './layout.component.html',
    styles: [
        `.sidenav-container {
            height: 100%;
        }

        .sidenav {
            width: 200px;
        }

        .sidenav .mat-toolbar {
            background: inherit;
        }

        .mat-toolbar.mat-primary {
            position: sticky;
            top: 0;
            z-index: 1;
        }
        `
    ]
})
export class LayoutComponent implements OnInit{

    menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products'];

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    constructor(private breakpointObserver: BreakpointObserver) {}

    // @ViewChild()
    event$ = fromEvent(window, 'scroll');

    ngOnInit(): void {

        this.event$.pipe(
            // tap(console.log),
            // map(event => console.log(event)),
        ).subscribe({
            next: (value) => {
                console.log(value);
            }
        })

    }

    ngOnDestroy() {}

    ngAfterViewInit(): void {
        // this.event$.pipe(
        //     // tap(console.log),
        //     // map(event => console.log(event)),
        // ).subscribe({
        //     next: (value) => {
        //         console.log(value);
        //     }
        // })
    }
}

import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {map, Observable, shareReplay, Subscriber} from "rxjs";
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
    imports: [CommonModule, MatSidenavModule, RouterModule, MatToolbarModule, MatListModule, MatIconModule, MatButtonModule],
    templateUrl: './layout.component.html',
    styles: []
})
export class LayoutComponent implements OnInit{

    menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products'];

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    constructor(private breakpointObserver: BreakpointObserver) {}

    obs$: Observable<string> = new Observable<string>((subs: Subscriber<string>) => {
        subs.next('a');
        subs.next('b');
        subs.next('c');
        subs.next('d');

        /*Deja de emitirse valores*/
        subs.complete();
    });

    obs$2: Observable<any> = Observable.create();

    ngOnInit() {
        this.obs$.subscribe()
    }
}

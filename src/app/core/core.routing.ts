import { Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {HomeComponent} from "./pages/home/home.component";

export const coreRouting: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: '*',
                redirectTo: 'home'
            }
        ]
    },
    {
        path: '*',
        redirectTo: 'home'
    }
];

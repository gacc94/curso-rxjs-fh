import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgSwitch, NgSwitchDefault, NgSwitchCase, CommonModule} from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class AppComponent {
    title = 'curso-rxjs';
}

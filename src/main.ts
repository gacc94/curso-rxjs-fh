import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import {appRouting} from "./app/app.routing";
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import {provideRouter} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";


bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(appRouting),
        importProvidersFrom(
            BrowserModule,
            BrowserAnimationsModule,
            HttpClientModule, BrowserAnimationsModule
        ),
    ]
}).then((r)=>r.components)

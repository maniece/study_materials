import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {appService} from './app.service';


import {AppComponent} from './app.component';

@NgModule({
    imports: [BrowserModule,HttpModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers:[appService]
})

export class AppModule{}
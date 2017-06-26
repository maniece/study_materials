import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {subComponent1} from './app.subComponent1';
import {subComponent2} from './app.subComponent2';

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent,subComponent1,subComponent2],
    bootstrap: [AppComponent]
})

export class AppModule{}
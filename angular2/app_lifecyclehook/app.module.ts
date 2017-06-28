import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {subComp1} from './subComponent1';
import {subComp2} from './subComponent2';

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent,subComp1,subComp2],
    bootstrap: [AppComponent]
})

export class AppModule{}
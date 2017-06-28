import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {squarePipe,farenheitToCelciusPipe,filterPipe} from './customPipe';

import {AppComponent} from './app.component';

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent,squarePipe,farenheitToCelciusPipe,filterPipe],
    bootstrap: [AppComponent]
})

export class AppModule{}
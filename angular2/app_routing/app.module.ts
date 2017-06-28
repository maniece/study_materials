import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router';
import {AppPage1} from './app.page1';
import {AppPage2} from './app.page2';

import {AppComponent} from './app.component';
const appRoutes : Routes = [
    {path:'page1',component:AppPage1},
    {path:'',redirectTo:'page1',pathMatch:'full'},
    {path:'page2',component:AppPage2}    
];

@NgModule({
    imports: [BrowserModule,RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent,AppPage1,AppPage2],
    bootstrap: [AppComponent]
})

export class AppModule{}
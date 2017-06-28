import {Component} from '@angular/core';

@Component({
    selector:'page1',
    template:`<h1>This is page 1</h1>
    <input type="button" value="Navigate to Page 2" [routerLink]="['/page2']" />
    `
})

export class AppPage1{
}
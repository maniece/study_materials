import {Component} from '@angular/core';


@Component({
    selector:'my-app',
    moduleId: module.id,
    templateUrl:'./template/app.component.html',
    styleUrls:['./style/app.component.css']
})

export class AppComponent{
    colorClass:string = 'red';
    border:any ='1px solid pink';

    changeClass(){
        if(this.colorClass == 'red')
            this.colorClass = 'blue';
        else
            this.colorClass = 'red';
    }
}

import {Component} from '@angular/core';
import * as _ from 'underscore';


@Component({
    selector:'my-app',
    moduleId: module.id,
    templateUrl:'./template/app.component.html'
})

export class AppComponent{
    constructor(){
        let numArray = {"name":"xyz","class":"lkg"};
        let num2 = _.keys(numArray);
        setTimeout(()=>{console.log("Distinct Array:"+num2)},2000);
        /*Output is ["name","class"]*/
        /*Please refer underscore official website*/
    }
}

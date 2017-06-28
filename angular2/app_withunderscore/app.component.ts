import {Component} from '@angular/core';
import * as _ from 'underscore';


@Component({
    selector:'my-app',
    moduleId: module.id,
    templateUrl:'./template/app.component.html'
})

export class AppComponent{
    constructor(){
        let numArray = {"name":"mani"};
        let num2 = _.keys(numArray);
        setTimeout(()=>{console.log("Distinct Array:"+num2)},2000);
        /*Please refer underscore official website*/
    }
}

import {Component} from '@angular/core';



@Component({
    selector:'my-app',
    moduleId: module.id,
    templateUrl:'./template/app.component.html',
    styleUrls:['./style/app.component.css']
})

export class AppComponent{
    selectedNumber:number=0;
    sampleField:string='sampleName';
    inputFarenheit:number=32;
    cartoonArray = ['panda_1','bheem_1','dora_1','popeye_1','jackie_1','panda_2','bheem_2','dora_2','popeye_2','jackie_2','panda_3','bheem_3','dora_3','popeye_3','jackie_3'];
}

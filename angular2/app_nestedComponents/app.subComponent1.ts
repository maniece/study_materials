import {Component,Input} from '@angular/core';


@Component({
    selector:'sc_1',
    moduleId: module.id,
    templateUrl:'./template/app.subComponent1.html'
})

export class subComponent1{
    @Input() valueToSC_1:string;
    toSubComponent_2:string;
    childData:string;
}

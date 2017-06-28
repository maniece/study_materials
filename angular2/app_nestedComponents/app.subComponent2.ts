import {Component,Input,Output,EventEmitter} from '@angular/core';


@Component({
    selector:'sc_2',
    moduleId: module.id,
    templateUrl:'./template/app.subComponent2.html'
})

export class subComponent2{
    @Input() valueToSC_2:string;
    @Output() childEvent = new EventEmitter();
    toSubComponent1:string;
    onChange(){
        this.childEvent.emit(this.toSubComponent1);
    }
}

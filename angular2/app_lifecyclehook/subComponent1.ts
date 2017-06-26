import {Component,OnInit,OnDestroy,OnChanges,SimpleChanges,Input} from '@angular/core';


@Component({
    selector:'sc_1',
    moduleId: module.id,
    templateUrl:'./template/subComponent1.html'
})

export class subComp1 implements OnChanges,OnInit{

    @Input() valueToChange:string;

      ngOnInit(){
        console.log("Sub Component was Created Successfully");
    }

    ngOnChanges(changes:SimpleChanges){
        console.log(JSON.stringify(changes));
    }

}

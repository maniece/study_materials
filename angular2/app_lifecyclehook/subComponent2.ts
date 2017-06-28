import {Component,OnInit,OnDestroy,OnChanges,SimpleChanges,Input} from '@angular/core';


@Component({
    selector:'sc_2',
    moduleId: module.id,
    templateUrl:'./template/subComponent2.html'
})

export class subComp2 implements OnInit,OnDestroy{
    

    ngOnInit(){
        console.log("Sub Component 2 was Created Successfully");
    }

    ngOnDestroy(){
        console.log("Sub Component 2 was Destroyed Successfully");
    }

}

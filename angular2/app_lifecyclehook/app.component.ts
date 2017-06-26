import {Component,OnInit,OnDestroy,OnChanges,SimpleChanges,DoCheck} from '@angular/core';


@Component({
    selector:'my-app',
    moduleId: module.id,
    templateUrl:'./template/app.component.html'
})

export class AppComponent implements OnInit,OnDestroy,DoCheck{
    testValue:string;
    status:boolean= true;
    ngOnInit(){
        console.log("Component was Created Successfully");
    }
    ngOnDestroy():void{
        console.log("Component was destroyed successfully");
    }
    ngDoCheck(){
        console.log("ngDoCheck Called Successfully");        
    }


    changeSC2Status(){
        if(this.status===true)
            this.status=false;
        else
            this.status=true;
    }
}

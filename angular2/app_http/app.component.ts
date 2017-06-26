import {Component,OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {appService} from './app.service';

@Component({
    selector:'my-app',
    moduleId: module.id,
    templateUrl:'./template/app.component.html',
    providers:[]
})

export class AppComponent implements OnInit{
    sampleArray;
    sampleArray2;
    constructor(private _http:Http,private _appService:appService){}

    ngOnInit(){
        this._appService.getData().subscribe(data=>this.sampleArray=data);

        this._appService.getData1().subscribe(data1=>this.sampleArray2=data1.data1);
        //we can filter based on the requirement. Here i taken the value for particular key "data1"
        setTimeout(()=>{
            console.log("Output Array: "+JSON.stringify(this.sampleArray2));
        },2000);
    }


}

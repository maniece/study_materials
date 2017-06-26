import {Component} from '@angular/core';


@Component({
    selector:'my-app',
    moduleId: module.id,
    templateUrl:'./template/app.component.html',
    styleUrls:['./style/app.component.css']
})

export class AppComponent{
     fruits:any[]=['Apple','Orange','Pineapple','grapes','banana','mozambi','lemon'];
     status:boolean = true;
     
     tab:number=1;

     enableClass_1 = true;
     enableClass_2 = true;

     enableStyle_1 =false;
     enableStyle_2 =true;   

     toggleStatus(){
         if(this.status)
            this.status = false;
         else
            this.status = true;
     }

     showTab(tabNum){
         this.tab = tabNum;
     }


     setClass(){
         let classes = {
             class_1 : this.enableClass_1,
             class_2 : this.enableClass_2

         }
         return classes;
     }

     setStyle(){
         let styles={
            'font-weight': this.enableStyle_1 ? 'bold' : 'normal',
            'text-decoration': this.enableStyle_2 ? 'underline' :'none'
         }

         return styles;
     }
}

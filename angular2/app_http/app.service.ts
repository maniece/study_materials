import  {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';

import {Observable} from 'rxjs/Rx';


/* SOME OBSERVABLE OPERATORS */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/concat';
// import 'rxjs/add/operator/distinct';


@Injectable()
export class appService{
    sampArray1;

    constructor(private _http:Http){
        let numArray = [1,3,5];
        let numArray2 = [2,4,6];
        let numArray3 = [1,2,4,2,6,1];
        
        let charArray = ["one","two","three","four"];
        let childArray = [
            {"Name":"Mani1","class":"lkg"},
            {"Name":"Mani2","class":"ukg"},
            {"Name":"Mani3","class":"lkg"},
            {"Name":"Mani4","class":"ukg"},
        ];

        let arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8;

        /*  MAP OPERATOR */
        arr1 = numArray.map(x=>x*x);
        console.log("Num Array Squared: "+arr1);
        /* RESULT IS [1,9,25]*/

        charArray = charArray.map(x=>x.toUpperCase());
        console.log("Char Array Uppercased: "+charArray);
        /* RESULT IS ["ONE","TWO","THREE"]*/

        arr2 = numArray.map(x=>x<5);
        console.log("map condition: "+arr2);
        /* RESULT IS [true,true,false]*/
        /********************************************************************************/
        
        /*  FILTER  */
        arr3 = numArray.filter(x=>x<5);
        console.log("Filter Array: "+arr3);
        /* RESULT IS [1,3]*/

        arr4 =childArray.filter(x=>x.class=='lkg'); 
        console.log("Filter Array: "+JSON.stringify(arr4));
         /* RESULT IS [ {"Name":"Mani1","class":"lkg"},{"Name":"Mani3","class":"lkg"}]*/

        

        /*  MERGE */
        arr6 = Observable.merge(numArray2,numArray);
        console.log("Merged Array:"+JSON.stringify(arr6.source.array));
         /* RESULT IS [ [2,4,6],[1,3,5]]*/

         /* CONCAT */
         arr7 = Observable.concat(charArray,numArray);
         console.log("Concat Array:"+JSON.stringify(arr7));
         /* RESULT IS [ ["one","two","three","four"],[1,3,5]]*/

    }

    getData(){
       return this.sampArray1=this._http.get('../sampleJson/sample1.json').map((response:Response)=>response.json());
    }

    getData1(){
        return this._http.get('http://localhost:8091/sampleData').map((response:Response)=>response.json());
    }
}
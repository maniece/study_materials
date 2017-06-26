"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
/* SOME OBSERVABLE OPERATORS */
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/merge");
require("rxjs/add/operator/concat");
// import 'rxjs/add/operator/distinct';
var appService = (function () {
    function appService(_http) {
        this._http = _http;
        var numArray = [1, 3, 5];
        var numArray2 = [2, 4, 6];
        var numArray3 = [1, 2, 4, 2, 6, 1];
        var charArray = ["one", "two", "three", "four"];
        var childArray = [
            { "Name": "Mani1", "class": "lkg" },
            { "Name": "Mani2", "class": "ukg" },
            { "Name": "Mani3", "class": "lkg" },
            { "Name": "Mani4", "class": "ukg" },
        ];
        var arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8;
        /*  MAP OPERATOR */
        arr1 = numArray.map(function (x) { return x * x; });
        console.log("Num Array Squared: " + arr1);
        /* RESULT IS [1,9,25]*/
        charArray = charArray.map(function (x) { return x.toUpperCase(); });
        console.log("Char Array Uppercased: " + charArray);
        /* RESULT IS ["ONE","TWO","THREE"]*/
        arr2 = numArray.map(function (x) { return x < 5; });
        console.log("map condition: " + arr2);
        /* RESULT IS [true,true,false]*/
        /********************************************************************************/
        /*  FILTER  */
        arr3 = numArray.filter(function (x) { return x < 5; });
        console.log("Filter Array: " + arr3);
        /* RESULT IS [1,3]*/
        arr4 = childArray.filter(function (x) { return x.class == 'lkg'; });
        console.log("Filter Array: " + JSON.stringify(arr4));
        /* RESULT IS [ {"Name":"Mani1","class":"lkg"},{"Name":"Mani3","class":"lkg"}]*/
        /*  MERGE */
        arr6 = Rx_1.Observable.merge(numArray2, numArray);
        console.log("Merged Array:" + JSON.stringify(arr6.source.array));
        /* RESULT IS [ [2,4,6],[1,3,5]]*/
        /* CONCAT */
        arr7 = Rx_1.Observable.concat(charArray, numArray);
        console.log("Concat Array:" + JSON.stringify(arr7));
        /* RESULT IS [ ["one","two","three","four"],[1,3,5]]*/
    }
    appService.prototype.getData = function () {
        return this.sampArray1 = this._http.get('../sampleJson/sample1.json').map(function (response) { return response.json(); });
    };
    appService.prototype.getData1 = function () {
        return this._http.get('http://localhost:8091/sampleData').map(function (response) { return response.json(); });
    };
    appService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], appService);
    return appService;
}());
exports.appService = appService;
//# sourceMappingURL=app.service.js.map
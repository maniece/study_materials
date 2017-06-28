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
var app_service_1 = require("./app.service");
var AppComponent = (function () {
    function AppComponent(_http, _appService) {
        this._http = _http;
        this._appService = _appService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._appService.getData().subscribe(function (data) { return _this.sampleArray = data; });
        this._appService.getData1().subscribe(function (data1) { return _this.sampleArray2 = data1.data1; });
        //we can filter based on the requirement. Here i taken the value for particular key "data1"
        setTimeout(function () {
            console.log("Output Array: " + JSON.stringify(_this.sampleArray2));
        }, 2000);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: './template/app.component.html',
            providers: []
        }),
        __metadata("design:paramtypes", [http_1.Http, app_service_1.appService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
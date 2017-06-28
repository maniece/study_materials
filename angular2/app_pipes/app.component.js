"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.selectedNumber = 0;
        this.sampleField = 'sampleName';
        this.inputFarenheit = 32;
        this.cartoonArray = ['panda_1', 'bheem_1', 'dora_1', 'popeye_1', 'jackie_1', 'panda_2', 'bheem_2', 'dora_2', 'popeye_2', 'jackie_2', 'panda_3', 'bheem_3', 'dora_3', 'popeye_3', 'jackie_3'];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: './template/app.component.html',
            styleUrls: ['./style/app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
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
        this.fruits = ['Apple', 'Orange', 'Pineapple', 'grapes', 'banana', 'mozambi', 'lemon'];
        this.status = true;
        this.tab = 1;
        this.enableClass_1 = true;
        this.enableClass_2 = true;
        this.enableStyle_1 = false;
        this.enableStyle_2 = true;
    }
    AppComponent.prototype.toggleStatus = function () {
        if (this.status)
            this.status = false;
        else
            this.status = true;
    };
    AppComponent.prototype.showTab = function (tabNum) {
        this.tab = tabNum;
    };
    AppComponent.prototype.setClass = function () {
        var classes = {
            class_1: this.enableClass_1,
            class_2: this.enableClass_2
        };
        return classes;
    };
    AppComponent.prototype.setStyle = function () {
        var styles = {
            'font-weight': this.enableStyle_1 ? 'bold' : 'normal',
            'text-decoration': this.enableStyle_2 ? 'underline' : 'none'
        };
        return styles;
    };
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
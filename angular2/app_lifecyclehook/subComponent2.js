"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var subComp2 = (function () {
    function subComp2() {
    }
    subComp2.prototype.ngOnInit = function () {
        console.log("Sub Component 2 was Created Successfully");
    };
    subComp2.prototype.ngOnDestroy = function () {
        console.log("Sub Component 2 was Destroyed Successfully");
    };
    subComp2 = __decorate([
        core_1.Component({
            selector: 'sc_2',
            moduleId: module.id,
            templateUrl: './template/subComponent2.html'
        })
    ], subComp2);
    return subComp2;
}());
exports.subComp2 = subComp2;
//# sourceMappingURL=subComponent2.js.map
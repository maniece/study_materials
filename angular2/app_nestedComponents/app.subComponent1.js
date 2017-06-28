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
var subComponent1 = (function () {
    function subComponent1() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], subComponent1.prototype, "valueToSC_1", void 0);
    subComponent1 = __decorate([
        core_1.Component({
            selector: 'sc_1',
            moduleId: module.id,
            templateUrl: './template/app.subComponent1.html'
        })
    ], subComponent1);
    return subComponent1;
}());
exports.subComponent1 = subComponent1;
//# sourceMappingURL=app.subComponent1.js.map
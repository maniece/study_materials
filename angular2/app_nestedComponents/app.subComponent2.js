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
var subComponent2 = (function () {
    function subComponent2() {
        this.childEvent = new core_1.EventEmitter();
    }
    subComponent2.prototype.onChange = function () {
        this.childEvent.emit(this.toSubComponent1);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], subComponent2.prototype, "valueToSC_2", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], subComponent2.prototype, "childEvent", void 0);
    subComponent2 = __decorate([
        core_1.Component({
            selector: 'sc_2',
            moduleId: module.id,
            templateUrl: './template/app.subComponent2.html'
        })
    ], subComponent2);
    return subComponent2;
}());
exports.subComponent2 = subComponent2;
//# sourceMappingURL=app.subComponent2.js.map
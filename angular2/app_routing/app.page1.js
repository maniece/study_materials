"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppPage1 = (function () {
    function AppPage1() {
    }
    AppPage1 = __decorate([
        core_1.Component({
            selector: 'page1',
            template: "<h1>This is page 1</h1>\n    <input type=\"button\" value=\"Navigate to Page 2\" [routerLink]=\"['/page2']\" />\n    "
        })
    ], AppPage1);
    return AppPage1;
}());
exports.AppPage1 = AppPage1;
//# sourceMappingURL=app.page1.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var squarePipe = (function () {
    function squarePipe() {
    }
    squarePipe.prototype.transform = function (numberToConvert) {
        var squaredNumber = numberToConvert * numberToConvert;
        return squaredNumber;
    };
    squarePipe = __decorate([
        core_1.Pipe({
            name: 'square'
        })
    ], squarePipe);
    return squarePipe;
}());
exports.squarePipe = squarePipe;
var farenheitToCelciusPipe = (function () {
    function farenheitToCelciusPipe() {
    }
    farenheitToCelciusPipe.prototype.transform = function (farenheit) {
        var celcius = ((farenheit - 32) * 5) / 9;
        return celcius;
    };
    farenheitToCelciusPipe = __decorate([
        core_1.Pipe({
            name: 'farenheitToCelcius',
        })
    ], farenheitToCelciusPipe);
    return farenheitToCelciusPipe;
}());
exports.farenheitToCelciusPipe = farenheitToCelciusPipe;
var filterPipe = (function () {
    function filterPipe() {
    }
    filterPipe.prototype.transform = function (cartoons, term) {
        if (term === undefined)
            return cartoons;
        else
            return cartoons.filter(function (cartoon) {
                return cartoon.toLowerCase().includes(term.toLowerCase());
            });
    };
    filterPipe = __decorate([
        core_1.Pipe({
            name: 'filter'
        })
    ], filterPipe);
    return filterPipe;
}());
exports.filterPipe = filterPipe;
//# sourceMappingURL=customPipe.js.map
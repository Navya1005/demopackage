"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.multiply = exports.subtract = exports.add = exports.Greeter = void 0;
var Greeter = function (name) { return "Hello ".concat(name); };
exports.Greeter = Greeter;
function add(a, b) {
    console.log("Result:", a + b);
    return a + b;
}
exports.add = add;
function subtract(a, b) {
    console.log("Result:", a - b);
    return a - b;
}
exports.subtract = subtract;
function multiply(a, b) {
    console.log("Result:", a * b);
    return a * b;
}
exports.multiply = multiply;
function divide(a, b) {
    console.log("Result:", a / b);
    return a / b;
}
exports.divide = divide;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age, organization) {
        this.name = name;
        this.age = age;
        this.organization = organization;
    }
    Person.prototype.getData = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Organization: ").concat(this.organization);
    };
    return Person;
}());
var amit = new Person("Amarjet", 34, "GTA");
// console.log(amit);
console.log(amit.getData());

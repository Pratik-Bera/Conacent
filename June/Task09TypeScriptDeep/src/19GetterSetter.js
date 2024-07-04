"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            if (this._name === undefined) {
                throw new Error("Name is not defined");
            }
            return this._name;
        },
        // This is setter and getter property at a class level. This set accessor exactly takes one parameter.
        // so we need to write one set property for each private property.
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.setter = function (name, email, age) {
        this._name = name;
        this.email = email;
        this.id = age;
    };
    Person.prototype.getter = function () {
        return {
            name: this._name,
            email: this.email,
            id: this.id
        };
    };
    return Person;
}());
main();
function main() {
    var amit = new Person();
    amit.name = "Amit"; // assign property using set accessor.
    amit.setter("Ashok", "example@gmail.com", 25); // assign property using setter method
    console.log(amit.name); // by using get accessor
    console.log(amit.getter()); // by using getter method .
}

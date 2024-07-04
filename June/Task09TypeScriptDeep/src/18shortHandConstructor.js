"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age, accNo, branch) {
        this.name = name;
        this.age = age;
        this.accNo = accNo;
        this.branch = branch;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(rollNo, name, age, accNo, branch, course) {
        var _this = _super.call(this, name, age, accNo, branch) || this;
        _this.rollNo = rollNo;
        _this.age = age;
        _this.branch = branch;
        _this.course = course;
        return _this;
    }
    return Student;
}(Person));
var aman = new Person("aman", 28, 45, "Kolkata");
console.log(aman.name);
var sachin = new Student(123, "sachin", 25, 56, "Kolkata", "BTech");
console.log(sachin.name);
console.log(sachin.course);

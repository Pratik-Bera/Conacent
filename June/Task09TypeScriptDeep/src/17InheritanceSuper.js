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
    function Person(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    Person.prototype.introduce = function () {
        return "Myself ".concat(this.name, ", and age is ").concat(this.age, ", my height is ").concat(this.height);
    };
    return Person;
}());
;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, height, grade, marks, depertment) {
        var _this = _super.call(this, name, age, height) || this;
        _this.grade = grade;
        _this.marks = marks;
        _this.depertment = depertment;
        return _this;
    }
    Student.prototype.introduce = function () {
        return _super.prototype.introduce.call(this) + " my grade is ".concat(this.grade, ", and my marks are ").concat(this.marks);
    };
    return Student;
}(Person));
var anjali = new Student("anjali", 23, 7, "A", 90, "BCA");
var javed = new Person("javed", 23, 7);
console.log(anjali.introduce());
console.log(javed.introduce());

"use strict";
let student = {
    name: "John",
    age: 25,
    greet: (country) => {
        return country;
    }
};
let stu = (student1) => {
    return student1.name;
};
console.log(stu(student));
console.log(student.greet("+91"));

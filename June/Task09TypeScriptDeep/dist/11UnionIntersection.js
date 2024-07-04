"use strict";
let func = (value) => {
    (typeof (value) === 'number') ?
        console.log(value * 2) :
        console.log(value.toUpperCase());
};
func(10);
func("Hello World");
let subha = {
    name: "subha",
    age: 25,
    empId: 101
};
console.log(subha);
let joy = {
    name: "joy",
    age: 25,
    empId: 101,
    department: "IT" // if i missing any of them that can occor an error.
};
console.log(joy);

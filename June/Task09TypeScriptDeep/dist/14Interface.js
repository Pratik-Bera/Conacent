"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sayan = {
    name: "Sayan",
    empId: 12345,
    salary: 10000,
    designation: "Developer",
    bonus: 1000
};
const empSalary = (employee) => {
    return employee.salary + employee.bonus;
};
console.log(empSalary(sayan));

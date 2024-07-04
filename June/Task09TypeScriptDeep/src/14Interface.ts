export{};

interface Employee{
    name:string;
    empId:number;
    salary:number;
    designation:string;
    bonus:number;
}

let sayan:Employee = {
    name:"Sayan",
    empId:12345,
    salary:10000,
    designation:"Developer",
    bonus:1000
}

const empSalary:(employee:Employee)=>number = (employee:Employee):number =>{
    return employee.salary +employee.bonus;
};

console.log(empSalary(sayan));
let func:(value:string|number)=>void= (value:string|number):void =>{        //Uniobn in TS
    (typeof(value)==='number')?
    console.log(value * 2):
    console.log(value.toUpperCase());
}

func(10);
func("Hello World");


// Union Of Objects 

type Person = {
    name:string;
    age:number;
}

type Employee={
    empId:number;
    department:string;
}

type WorkingPerson = Person | Employee;

let subha:WorkingPerson={           // You can use here any property form 2 types Person, Employee.
    name:"subha",
    age:25,
    empId:101
}

console.log(subha);


//Intersection 
// We are using above 2 types Person and Employee already declared data.

type NormalPerson = Person & Employee;

let joy:NormalPerson = {        // here need all property fron both types we can't any property of them.
    name:"joy",
    age:25,
    empId:101,
    department:"IT"         // if i missing any of them that can occor an error.
}

console.log(joy);
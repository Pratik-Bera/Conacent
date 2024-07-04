type Student={
    name:string,
    age:number,
    greet:(country:string)=>string,
}



let student ={
    name: "John",
    age: 25,
    greet:(country:string) => {
        return country;
    }
}

let stu:(student1:Student) => string = (student1:Student):string =>{
    return student1.name;
}

console.log(stu(student));

console.log(student.greet("+91"));
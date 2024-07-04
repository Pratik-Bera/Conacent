export{};
class Person{
    name : string;
    age : number;
    height : number;
    constructor(name : string, age : number, height : number){
        this.name = name;
        this.age = age;
        this.height = height;
    }

    introduce():string{
        return `Myself ${this.name}, and age is ${this.age}, my height is ${this.height}`;
    }
};

class Student extends Person{
    grade : string;
    marks : number;
    depertment : string;
    constructor(name : string, age : number, height : number, grade : string, marks : number, depertment : string){
        super(name, age, height);
        this.grade = grade;
        this.marks = marks;
        this.depertment = depertment;
    }

    introduce(): string{
        return super.introduce()+` my grade is ${this.grade}, and my marks are ${this.marks}`;
    }
    

}

let anjali = new Student("anjali",23,7,"A",90,"BCA");

let javed = new Person("javed",23,7);


console.log(anjali.introduce());
console.log(javed.introduce());    
export{}

// using shortHand Assigning using Access Modifiers...
class Person{
    constructor(public name: string,
         public age: number,
         private accNo:Number,
         protected branch:string){};
}

class Student extends Person{
    constructor(
        public rollNo:number,
        name: string,
        age: number,
        accNo:Number,
        branch:string,
        public course:string ){

        super(name,age,accNo,branch);
    }
}

let aman = new Person("aman",28,45,"Kolkata");
console.log(aman.name);

let sachin = new Student(123,"sachin",25,56,"Kolkata","BTech");

console.log(sachin.name);
console.log(sachin.course);
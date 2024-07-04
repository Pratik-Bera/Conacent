
export{};
class Person{
    private name?:string;
    protected age?:number;
    organization?:string;
    constructor(name?:string, age?:number, organization?:string){
        this.name=name;
        this.age=age;
        this.organization=organization;
    }

    getData():string{
        return `Name: ${this.name}, Age: ${this.age}, Organization: ${this.organization}`;
    }


}

let amit= new Person("Amarjet",34,"GTA");
// console.log(amit);

console.log(amit.getData());


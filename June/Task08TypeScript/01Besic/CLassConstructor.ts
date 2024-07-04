class person{
    fName: string;
    age : number;
    constructor(fName: string, age: number){
        this.fName = fName;
        this.age = age;
        this.getAge();
    }

    getAge():void{
        console.log("get age"+this.age);
    }

}

let p1 = new person("java", 20);
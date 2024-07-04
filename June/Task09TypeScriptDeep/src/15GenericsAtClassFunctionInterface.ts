interface Man <Type>{
    user : Type[];
    addUser(name:Type):void;
}

class Amit<Type> implements Man<Type>{
    user: Type[]=[];
    addUser(name: Type):void{
        this.user.push(name);
    }
}

let obj = new Amit();

obj.addUser("Amit");
console.log(obj.user);
export{};

class Person{
    private _name:string|undefined;
    protected email:string|undefined;
    public id:number|undefined;


    // This is setter and getter property at a class level. This set accessor exactly takes one parameter.
    // so we need to write one set property for each private property.
    public set name(value:string){
        this._name=value;
    }

    public get name():string{
        if(this._name===undefined){
            throw new Error("Name is not defined");
        }
        return this._name;
    }



//This setter and getter is an ordinary method just takes some parameters and set the properties of the object
    public setter(name:string,email:string,age:number){
        this._name=name;
        this.email = email;
        this.id = age;
    }

    getter():Object {
        return {
            name: this._name,
            email: this.email,
            id: this.id
        }

    }
}

main();

function main(){
    let amit = new Person();
    amit.name = "Amit";         // assign property using set accessor.
    amit.setter("Ashok","example@gmail.com",25);    // assign property using setter method

    console.log(amit.name);     // by using get accessor
    console.log(amit.getter()); // by using getter method .
}

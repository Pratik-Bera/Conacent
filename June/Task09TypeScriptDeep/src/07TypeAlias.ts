/* Example of type alias */
// type alias is used for defining the type of an Object before creating objects. that uses for avaid repeat of code at definining the type of object.

type animal={
    name:string;
    legs:number;
    eye:number;
    color:string;
    breathe:boolean;
}

let dog:animal={        //Just uses the type as aslias name.
    name:"tomy",
    legs:4,
    eye:2,
    color:"black",
    breathe:true,
}
console.log(dog);

let cat:animal={
    name:"kitty",
    legs:4,
    eye:2,
    color:"white",
    breathe:true,
}
console.log(cat);

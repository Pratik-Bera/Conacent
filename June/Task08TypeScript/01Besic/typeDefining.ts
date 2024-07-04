export{}

//When we defining a type to a variable in typeScript then we can't assign any other type value to it.
let mynumber : number = 80;

let mystring : string = 'Pratik';

let myany : any = "Pratik";
myany=4;        // we can write this cause this is any type;

let myboolean : boolean = true;

let myarray : any[] = [1,"2",3,4];     // ShortHand
console.log(myarray);

let myNumberArray : Number[] = [1,2,3,4];

let myarray2 : Array<number> = [1,2,3,4];   // Generic syntax

let mytuple : [number,string] = [1,'Pratik'];





let human={
    name : "Jhon",
    age : 25,
    gender : "male",
    address:{
        city:"Pune",
        state:"Maharashtra",
        pincode:411018
    }
}

console.log(human);

human={
    name : "Jhon",
    age : 25,
    gender : "male",
    address:{
        city:"Pune",
        state:"Maharashtra",
        pincode:411018
        //country:"India" /* Error cause that is not present in previous type of objects. Type is taking by type Inference implecitly*/
    }
}

console.log(human);


//Type Defining of Object

let person :{
    name:string,
    age:number,
    gender:string,
    address:{
        city:string,
        state:string,
        pincode:number
    }
} = {
    name:"Tony",
    age:25,
    gender:"male",
    address:{
        city: "California",
        state:"California",
        pincode:94043
    }
}

console.log(person);
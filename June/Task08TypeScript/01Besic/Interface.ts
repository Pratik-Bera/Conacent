console.log("this is ineterface tutorial");

let data = {
    fName : "Pratik",
    lName : "Bera",
    age : 20,
    gender : "male",
    address : "123 Main St"
}

// let dataPrinter = (data:{fName:string,lName:string,age:number,gender : string})=>{      // Inline annotaion.
//     console.log(data.fName);
//     console.log(data.lName);
//     console.log(data.age);
//     console.log(data.gender);
// }

interface Person{
    fName:string,
    lName:string,
    age:number,
    gender : string
}

interface Person2 extends Person{
    address:string,
    city?:string,
    state?:string,
    country?:string,        //can extend and can give optional property.
    pincode?:number,
}

let dataPrinter = (data:Person2)=>{
    console.log(data.fName);
    console.log(data.lName);
    console.log(data.age);
    console.log(data.gender);
    console.log(data.address);
}
dataPrinter(data);
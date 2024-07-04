
//Fat Arrow in normal function
function f2<Type>(data:Type):Type{
    return data;
}

console.log(f2<number>(56));


// Fat arrow function with generics

let fun67=<Type>(value:Type):Type=>{
    return value;
};

console.log(fun67<string>("pratik"));

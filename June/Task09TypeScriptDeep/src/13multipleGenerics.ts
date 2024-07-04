export{};
let func=<type1,type2>(value1:type1,value2:type2)=>{
    if((typeof(value1)==='number')&&(typeof(value2)==='number')){
        return (value1+value2);
    }else if((typeof(value1)==='string')&&(typeof(value2)==='string')){
        return (value1+value2);
    }else if((typeof(value1)==='boolean')&&(typeof(value2)==='boolean')){
        return (value1);
    }else{
        return "string";
    }
};

let result:(string | number | boolean)= func<string,string>("Pratik" , "Bera");
let result2: (string | number | boolean)= func<number,number>(78,67);
let result3: (string | number | boolean)= func<boolean,boolean>(true,false);


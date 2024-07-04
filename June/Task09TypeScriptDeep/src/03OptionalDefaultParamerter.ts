let fun = (fName: string,lName: string,mName?: string):string =>{   // Emample of Optional Parameter
    if(mName!=undefined){
        return `${fName} ${mName} ${lName}`;
    }else{
        return `${fName} ${lName}`;
    }
}

console.log(fun("John","Doe"));
"use strict";
let fun = (fName, lName, mName) => {
    if (mName != undefined) {
        return `${fName} ${mName} ${lName}`;
    }
    else {
        return `${fName} ${lName}`;
    }
};
console.log(fun("John", "Doe"));

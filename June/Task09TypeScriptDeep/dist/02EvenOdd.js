"use strict";
/*Write a program to check a number is even or odd ?*/
let num = 72;
let oddEvenChecker = (num) => {
    if (num % 2 != 0) {
        return false;
    }
    else {
        return true;
    }
};
if (oddEvenChecker(num)) {
    console.log("Even");
}
else {
    console.log("Odd");
}

"use strict";
let arr1 = ["Apple", "Banana", "Lemon", "Orange", "Dragon Fruit"];
//for-in 
for (let i in arr1) {
    console.log(arr1[i]);
}
console.log("");
//for-of
for (let value of arr1) {
    console.log(value);
}
console.log("");
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
let arrNum = [7, 8, 9, 4, 5, 6, 1, 2, 3];
let dubbleArr = arrNum.map((val) => {
    return (val * 2);
});
console.log(dubbleArr);
console.log(arrNum);

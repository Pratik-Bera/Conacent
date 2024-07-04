let array1: number[] = [1,2,3,4,5,6,7];
console.log(array1[0]);
// By using Array Constructor.
let array2 : number[] = new Array(1,2,3,4,5,6,7);
console.log(array2[1]);
//By using Array.of().
let array3 : number[] = Array.of(1,2,3,4,5,6,7);
console.log(array3[2]);
let array4 : (string | number | boolean)[] = [2,3,4,5,"6",7,4,true];
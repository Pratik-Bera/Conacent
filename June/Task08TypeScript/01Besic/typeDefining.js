"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//When we defining a type to a variable in typeScript then we can't assign any other type value to it.
var mynumber = 80;
var mystring = 'Pratik';
var myany = "Pratik";
myany = 4; // we can write this cause this is any type;
var myboolean = true;
var myarray = [1, "2", 3, 4]; // ShortHand
console.log(myarray);
var myNumberArray = [1, 2, 3, 4];
var myarray2 = [1, 2, 3, 4]; // Generic syntax
var mytuple = [1, 'Pratik'];

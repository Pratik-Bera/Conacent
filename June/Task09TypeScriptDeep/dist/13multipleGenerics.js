"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let func = (value1, value2) => {
    if ((typeof (value1) === 'number') && (typeof (value2) === 'number')) {
        return (value1 + value2);
    }
    else if ((typeof (value1) === 'string') && (typeof (value2) === 'string')) {
        return (value1 + value2);
    }
    else if ((typeof (value1) === 'boolean') && (typeof (value2) === 'boolean')) {
        return (value1);
    }
    else {
        return "string";
    }
};
let result = func("Pratik", "Bera");
let result2 = func(78, 67);
let result3 = func(true, false);

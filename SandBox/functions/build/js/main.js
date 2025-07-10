"use strict";
const sum = (a, b) => {
    return a + b;
};
console.log(sum(6, 2));
let logMsg = function (message) {
    console.log(message);
};
logMsg(sum(2, 5));
let subFxn = (a, b) => {
    return a - b;
};
console.log(subFxn(2, 4));
let mulFxn = function (a, b) {
    return a * b;
};
console.log(mulFxn(4, 2));
// Optional Parameter
const sumAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
console.log(sumAll(2, 11));
// Default Parameter Values
const addAll = (a, b, c = 2) => {
    return a + b + c;
};
console.log(addAll(2, 11));
console.log(addAll(2, 11, 7));
const subAll = (a = 24, b, c = 7) => {
    return a - b - c;
};
logMsg(subAll(12, 3, 1));
logMsg(subAll(undefined, 3));

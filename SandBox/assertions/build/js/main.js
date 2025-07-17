"use strict";
// direct assertation
let a = "Hello";
console.log(a);
let b = a;
console.log(b);
let c = a;
console.log(c);
// angle bracket assertation not suitable for react tsc
let d = "Welcome";
let e = 42;
let f = false;
console.log(d, e, f);
// Using assertions
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let stringConcat = addOrConcat(2, 6, "concat"); // This seem correct cos we are using concat and expects a string as given on the fxn
let numberConcat = addOrConcat(2, 5, "concat"); // This is wrong because we are expecting it to return a number but it will return a string
// using assertion for DOM
const img = document.querySelector("img"); // more specific
const myImg = document.querySelector("#img"); // less specific
const newImg = document.getElementById("img"); // a bit  specific
img.src;
myImg.src;

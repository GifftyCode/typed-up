// Type aliases
type one = string;
type two = string | number;
type three = "Hello";

// direct assertation
let a: one = "Hello";
console.log(a);

let b = a as two;
console.log(b);

let c = a as three;
console.log(c);

// angle bracket assertation not suitable for react tsc

let d = <one>"Welcome";
let e = <two>42;
let f = <string | boolean>false;
console.log(d, e, f);

// Using assertions

const addOrConcat = (a: number, b: number, c: "add" | "concat") => {
  if (c === "add") return a + b;

  return "" + a + b;
};

let stringConcat: string = addOrConcat(2, 6, "concat") as string; // This seem correct cos we are using concat and expects a string as given on the fxn

let numberConcat: number = addOrConcat(2, 5, "concat") as number; // This is wrong because we are expecting it to return a number but it will return a string

// using assertion for DOM
const img = document.querySelector("img")!; // more specific
const myImg = document.querySelector("#img") as HTMLImageElement; // less specific
const newImg = <HTMLImageElement>document.getElementById("img"); // a bit  specific

img.src;
myImg.src;

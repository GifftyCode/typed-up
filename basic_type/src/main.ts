// Variables

let isActive: boolean;

let age: number = 30;

let userName = "Gift";
let postId: string | number;
let comments: any;

userName = "Babe";

const getPost = (a: number, b: string) => {
  return a + b;
};

let re: RegExp = /\w/g;

// Arrays

let stringData: string[] = ["Dave", "Gift", "Sam"];
let mixedData: (string | number)[] = ["Cat", 42, "Bird"];
let data = [true, "Teacher", 22, false];

mixedData[3] = "Rat";

data[0] = 42;

data = mixedData;

// Tupple

let personData: [string, number, boolean] = ["Gift", 32, true];

console.log((personData[2] = false));

// Object
let myObject: object;

let dataObj = {};

console.log(typeof dataObj);

myObject = [];
console.log(typeof myObject);

let userName: string;

let userAge = 32;

let userId: string | number = "abc";

userId = 123;

let isActive = false;

let user: object; // setting user to an object of no structure or shape
user = {};
user = {
  name: "Max",
  age: 32,
  isAdmin: true,
  id: "abc",
};

let strictUser: {
  // setting user to an object of a specified shape
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let hobbies: Array<string>; // Array of strings
// or
let hobbies2: string[]; // number[], boolean[], {name: string; age: number;}[]

function add(a: number, b: number) {
  const result = a + b;
  console.log(result);
}

// for the above function with no return statement, we can use a return type of "void" or "undefined"
function addAgain(a: number, b: number): void {
  const result = a + b;
  console.log(result);
}

function addReturn(a: number, b: number): number {
  // we can also ommit the return type since ts can infer we are returning result which is a number
  const result = a + b;
  return result;
}

// function is a value in JS and when we want to use another inside a function as a parameter with it's function type:
function calculate(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number,
) {
  calcFn(a, b);
}

calculate(2, 4, addReturn);

// using custom types i.e type aliases to outsource type definition in TS

type AddFn = (a: number, b: number) => number;

function aliasCal(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 4, addReturn);

type stringOrNumber = string | Number;

let streetAd: stringOrNumber;

type book = {
  author: string;
  title: string;
  rating: number;
  isAvailable: true;
};

let books: book;

interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;

creds = {
  password: "123",
  email: "test@example.com",
};

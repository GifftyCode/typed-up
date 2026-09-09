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

// interface keyword can be explicitly used for object types and sometimes for function types too but we can use it on a class as an implementation but we will strictly add all the interafce parameters to the class.

// class AuthCredentials implements Credentials {
//     email: string;
//     password: string;
//     userName: string
// }

function login(credentials: Credentials) {}

login(creds);
// login(new AuthCredentials())

// Merging types
type Admin = {
  permission: string[];
};
type AppUser = {
  userName: string;
};
// type AppAdmin = Admin | AppUser // gives us either one of them
type AppAdmin = Admin & AppUser; // combines the two type as one

let admin: AppAdmin;
admin = {
  permission: ["login"],
  userName: "Max",
};

interface SuperAdmin {
  permission: string[];
}
interface SuperUser {
  userName: string;
}

interface SuperAppAdmin extends SuperAdmin, SuperUser {}

// Literal types: enforcing only the types given to a variable:

type Role = "admin" | "user" | "editor";
let role: Role;

function performAction(action: string, role: Role) {
  if (role === "admin") {
    // ...
  }
}

// Generic types
let roles = Array<Role>;
// Generic type placeholder: used when we don't know what type our variable will be => custom generic type and it if flexible.

// definition
type Datatorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

// Usage
const textStorage: Datatorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: Datatorage<User> = {
  storage: [],
  add(user) {},
};

// genertic function type:
function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge<{ name: string }, { age: number }>(
  { name: "Gift" },
  { age: 25 },
);

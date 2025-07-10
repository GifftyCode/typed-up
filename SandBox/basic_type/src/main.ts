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

let myObj = {
  name: "Kate",
  age: 22,
  siblings: ["Faith", "Sam"],
  married: true,
};

myObj.name = "Gift";
// myObj.age = '66'  ❌

myObj.siblings[0] = "Cas";

let randomSchool = {
  name: "St. Anthony",
  noOfClasses: 8,

  isRegistered: true,
};

type school = {
  name: string;
  noOfClasses: number;
  noOfTeacher?: number;
  isRegistered: boolean;
};

let emcSchool: school = {
  name: "EMC",
  noOfClasses: 12,
  isRegistered: true,
};

let smithCollege: school = {
  name: "Smit",
  noOfClasses: 8,
  noOfTeacher: 22,
  isRegistered: true,
};

smithCollege = randomSchool;

interface family {
  name?: string;
  familyNo: number;
  children: string[];
  parent: {};
}

let dominicFamily: family = {
  name: "Dominic",
  familyNo: 6,
  children: ["Kate", "Faith", "Sam", "Gift"],
  parent: {
    mother: "Blessing",
    father: "David",
  },
};

const familySchool = (School: school, Family: family) => {
  return `The family of ${Family.name?.toUpperCase()} has ${
    Family.children.length
  } children who attends ${School.name} and has ${
    School.noOfTeacher
  } taking them`;
};

console.log(familySchool(randomSchool, dominicFamily));

// type alias

type stringOrNumberOnly = string | number;
type stringOrBooleanOnly = string | boolean;
type anyType = string | number | boolean;
type stringNumberArray = (string | number)[];

type myName = stringOrNumberOnly;

let myname = "43";

type info = {
  name: "gift";
  userid: stringOrNumberOnly;
};

interface MathConst {
  pI: number;
  degree: string;
  coordinates: {};
}

const weatherForcast: MathConst = {
  pI: 31.447,
  degree: "celsius",
  coordinates: { lat: 32, log: 44 },
};

console.log(weatherForcast.coordinates);

//literal type
let sudoName: "Gifftybabe";

let friends: "Sammy" | "Guzbyte";

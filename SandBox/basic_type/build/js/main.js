"use strict";
// Variables
let isActive;
let age = 30;
let userName = "Gift";
let postId;
let comments;
userName = "Babe";
const getPost = (a, b) => {
    return a + b;
};
let re = /\w/g;
// Arrays
let stringData = ["Dave", "Gift", "Sam"];
let mixedData = ["Cat", 42, "Bird"];
let data = [true, "Teacher", 22, false];
mixedData[3] = "Rat";
data[0] = 42;
data = mixedData;
// Tupple
let personData = ["Gift", 32, true];
console.log((personData[2] = false));
// Object
let myObject;
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
let emcSchool = {
    name: "EMC",
    noOfClasses: 12,
    isRegistered: true,
};
let smithCollege = {
    name: "Smit",
    noOfClasses: 8,
    noOfTeacher: 22,
    isRegistered: true,
};
smithCollege = randomSchool;
let dominicFamily = {
    name: "Dominic",
    familyNo: 6,
    children: ["Kate", "Faith", "Sam", "Gift"],
    parent: {
        mother: "Blessing",
        father: "David",
    },
};
const familySchool = (School, Family) => {
    var _a;
    return `The family of ${(_a = Family.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()} has ${Family.children.length} children who attends ${School.name} and has ${School.noOfTeacher} taking them`;
};
console.log(familySchool(randomSchool, dominicFamily));
let myname = "43";
const weatherForcast = {
    pI: 31.447,
    degree: "celsius",
    coordinates: { lat: 32, log: 44 },
};
console.log(weatherForcast.coordinates);
//literal type
let sudoName;
let friends;

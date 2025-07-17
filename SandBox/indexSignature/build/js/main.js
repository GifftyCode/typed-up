"use strict";
const pizzaria = {
    pizza: "Pepperoni",
    price: 6500,
    location: "Gwagwalada",
    delivery: 700,
};
console.log(pizzaria.price);
console.log(pizzaria["pizza"]);
let zizzy = "pizza";
const bookSales = {
    books: 500,
    pen: 240,
    chalk: 50,
};
const bookStore = (sales) => {
    let total = 0;
    for (const sale in sales) {
        total += sales[sale];
    }
    return total;
};
console.log(bookStore(bookSales));
const Giffty = {
    name: "Gift",
    CGP: 32,
    age: 24,
    classes: [101, 201],
    //   testScore: 64,
    //   resumption: true,
};
// for (const student in Giffty) {
//   console.log(`${student}: ${Giffty[student]}`);
// }
// console.log(Giffty["school"]);
for (const student in Giffty) {
    console.log(`${student}: ${Giffty[student]}`);
}
Object.keys(Giffty).map((key) => {
    console.log(`${key}: ${Giffty[key]}`);
});
const logStudentinfo = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentinfo(Giffty, "name");
const monthlyIncome = {
    salary: 500,
    bonus: 100,
    sideHustle: 250,
};
for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue]);
}

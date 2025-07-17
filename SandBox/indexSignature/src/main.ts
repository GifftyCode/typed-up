interface TransactionObj {
  pizza: string;
  price: number;
  location: string;
  delivery: number;
}

const pizzaria: TransactionObj = {
  pizza: "Pepperoni",
  price: 6500,
  location: "Gwagwalada",
  delivery: 700,
};
console.log(pizzaria.price);
console.log(pizzaria["pizza"]);

let zizzy: string = "pizza";

// console.log(pizzaria[zizzy]); can't access the pizzaria object dynamically

interface Sales {
  [index: string]: number;
}

const bookSales: Sales = {
  books: 500,
  pen: 240,
  chalk: 50,
};

const bookStore = (sales: Sales) => {
  let total = 0;
  for (const sale in sales) {
    total += sales[sale];
  }
  return total;
};
console.log(bookStore(bookSales));

interface Student {
  //   [key: string]: string | number | number[] | boolean | undefined;
  name: string;
  CGP: number;
  age: number;
  classes?: number[];
}

const Giffty: Student = {
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
  console.log(`${student}: ${Giffty[student as keyof Student]}`);
}

Object.keys(Giffty).map((key) => {
  console.log(`${key}: ${Giffty[key as keyof typeof Giffty]}`);
});

const logStudentinfo = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};
logStudentinfo(Giffty, "name");

type income = "bonus" | "salary" | "sideHustle";

type stream = Record<income, string | number>;

const monthlyIncome: stream = {
  salary: 500,
  bonus: 100,
  sideHustle: 250,
};

for (const revenue in monthlyIncome) {
  console.log(monthlyIncome[revenue as keyof stream]);
}

const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(6, 2));

let logMsg = function (message: any): void {
  console.log(message);
};

logMsg(sum(2, 5));

type MathFunction = (a: number, b: number) => number;

let subFxn: MathFunction = (a, b) => {
  return a - b;
};

console.log(subFxn(2, 4));

interface MathConst {
  (a: number, b: number): number;
}

let mulFxn: MathConst = function (a, b) {
  return a * b;
};

console.log(mulFxn(4, 2));

// Optional Parameter
const sumAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
console.log(sumAll(2, 11));

// Default Parameter Values

const addAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};
console.log(addAll(2, 11));
console.log(addAll(2, 11, 7));

const subAll = (a: number = 24, b: number, c: number = 7) => {
  return a - b - c;
};

logMsg(subAll(12, 3, 1));
logMsg(subAll(undefined, 3));

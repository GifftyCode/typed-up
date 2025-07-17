// Normal fxn
const stringEcho = (arg: string): string => arg;

// Generic fxn
const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj([]));
console.log(isObj([2, 4, 6]));
console.log(isObj({ name: "Gift" }));
console.log(isObj("Gift"));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

// console.log(isTrue(true));
// console.log(isTrue(false));
// console.log(isTrue(100));
// console.log(isTrue("Dave"));
// console.log(isTrue(""));
// console.log(isTrue([1, 2, 3]));
// console.log(isTrue([]));
// console.log(isTrue({}));
// console.log(isTrue({ name: "Gift", age: 32 }));
// console.log(isTrue(null));
// console.log(isTrue(undefined));

interface BoolCheck<T> {
  value: T;
  is: Boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (
    (Array.isArray(arg) && !arg.length) ||
    (isObj(arg) && !Object.keys(arg as keyof T))
  ) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

// console.log(checkBoolValue(true));
// console.log(checkBoolValue(false));
// console.log(checkBoolValue(100));
// console.log(checkBoolValue("Dave"));
// console.log(checkBoolValue(""));
// console.log(checkBoolValue([1, 2, 3]));
// console.log(checkBoolValue([]));
// console.log(checkBoolValue({}));
// console.log(checkBoolValue({ name: "Gift", age: 32 }));
// console.log(checkBoolValue(null));
// console.log(checkBoolValue(undefined));

// Extends keyword
interface HasId {
  id: number;
}

const userId = <T extends HasId>(user: T): T => {
  return user;
};

console.log(userId({ name: "Gift", id: 2 }));
console.log(userId({ id: 2 }));

const processUser = <T extends HasId, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const userArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
];

// console.log(processUser(userArray, "email"));

class StateObj<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state() {
    return this.data;
  }
  set state(value: T) {
    this.data = value;
  }
}

let myObj = new StateObj("Dave");
console.log(myObj.state);
myObj.state = "Gift";

const storeObj = new StateObj<(string | number | boolean)[]>(["Gift"]);
console.log(storeObj.state);
storeObj.state = [200];
console.log(storeObj.state);

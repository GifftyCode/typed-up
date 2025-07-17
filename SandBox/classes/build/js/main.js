"use strict";
class coder {
    constructor(name, stack, age, lang = ["Typescript"]) {
        this.name = name;
        this.stack = stack;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        console.log(`Hello, I am ${this.age} years old `);
    }
}
const Giffty = new coder("Gift", "frontend", 34, ["Typescript", "Javascript"]);
console.log(Giffty);
// Giffty.stack
console.log(Giffty.age);
// Giffty.lang
console.log(Giffty.name);
// Extendes class
class webDev extends coder {
    constructor(computer, name, stack, age) {
        super(name, stack, age);
        this.computer = computer;
    }
    getLang() {
        return `Hello, I write ${this.lang}`;
    }
}
const Chantel = new webDev("Windows", "Eseohe", "Backend", 33);
console.log(Chantel.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Guzbyte = new Guitarist("Chiagoziem", "Piano");
console.log(Guzbyte.play("plays"));
////////////////////////////////
class minimal {
    static getCount() {
        return minimal.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++minimal.count;
    }
}
minimal.count = 0;
const Sammy = new minimal("Amy");
const Gifted = new minimal("Gift");
console.log(Sammy.id);
console.log(minimal.count);
// Getters and Setters
class animalKinds {
    constructor() {
        this.dataSet = [];
    }
    get data() {
        return this.dataSet;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataSet = value;
            return;
        }
        else
            throw new Error("Value must be an array of string. only");
    }
}
const dogs = new animalKinds();
dogs.data = ["Bingo"];
console.log(dogs.data);

class coder {
  constructor(
    public readonly name: string,

    private stack: string,
    public age: number,
    protected lang: string[] = ["Typescript"]
  ) {}

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
  constructor(
    public computer: string,
    name: string,
    stack: string,
    age: number
  ) {
    super(name, stack, age);
  }
  getLang() {
    return `Hello, I write ${this.lang}`;
  }
}
const Chantel = new webDev("Windows", "Eseohe", "Backend", 33);

console.log(Chantel.getLang());

//////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Guzbyte = new Guitarist("Chiagoziem", "Piano");
console.log(Guzbyte.play("plays"));

////////////////////////////////
class minimal {
  static count: number = 0;

  static getCount() {
    return minimal.count;
  }
  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++minimal.count;
  }
}
const Sammy = new minimal("Amy");
const Gifted = new minimal("Gift");
console.log(Sammy.id);
console.log(minimal.count);

// Getters and Setters

class animalKinds {
  public dataSet: string[];

  constructor() {
    this.dataSet = [];
  }
  public get data(): string[] {
    return this.dataSet;
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataSet = value;
      return;
    } else throw new Error("Value must be an array of string. only");
  }
}
const dogs = new animalKinds();
dogs.data = ["Bingo"];
console.log(dogs.data);

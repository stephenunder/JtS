const sum = (a: number, b: number) => {
  return a + b;
}

const answer = sum(4, 5);

console.log(answer);

// boolean
let isCool: boolean = true;

// number
let age: number = 32;

// string
let eyeColor: string = "green";
let favoriteQuote: string = `I'm not old, I'm only ${age}`;

// Arrays
let pets: string[] = ["cat", "dog", "pig"];
let pets2: Array<string> = ["lion", "dragon", "lizard"];

// Objects
let wizard: object = {
  a: "John"
}

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number];
basket = ["basketball", 5];

// Enum
enum Size { Small = 1, Medium = 2, Large = 3}
let sizeName: string = Size[2];

// Any - !! Be Careful
let whatever: any = "aghh noo!";
whatever = basket;

// void
let sing = (): void => {
  console.log("lalalala");
}

// never
let error = (): never => {
  throw Error("oops");
}

// interface
interface RobotArmy {
  count: number,
  type: string,
  magic?: string
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log("FIGHT!")
}
fightRobotArmy({count: 1, type: "dragon"})

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
  console.log("FIGHT!");
}

// Type Assertion
interface CatArmy {
  count: number,
  type: string,
  magic: string
}

let dog = {} as CatArmy
dog.count

// Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
  console.log("FIGHT!");
}

let fightRobotArmy4 = (robots: {count: number, type: string, magic: string}): number => {
  console.log("FIGHT!");
  return 5;
}

// Classes
class Animal {
  private sing: string = "lalalala";
  constructor(sound: string) {
    this.sing = sound;
  }

  greet(): string {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal("RAWR");
lion.greet()

// Union
let confused: string | number = "hello"; // or 5 for example

// Type inference
let x = 4;
x = "hey" // not explicitly stated, but TS inferred x as number
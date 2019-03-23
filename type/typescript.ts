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
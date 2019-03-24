var sum = function (a, b) {
    return a + b;
};
var answer = sum(4, 5);
console.log(answer);
// boolean
var isCool = true;
// number
var age = 32;
// string
var eyeColor = "green";
var favoriteQuote = "I'm not old, I'm only " + age;
// Arrays
var pets = ["cat", "dog", "pig"];
var pets2 = ["lion", "dragon", "lizard"];
// Objects
var wizard = {
    a: "John"
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ["basketball", 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
// Any - !! Be Careful
var whatever = "aghh noo!";
whatever = basket;
// void
var sing = function () {
    console.log("lalalala");
};
// never
var error = function () {
    throw Error("oops");
};
var fightRobotArmy = function (robots) {
    console.log("FIGHT!");
};
fightRobotArmy({ count: 1, type: "dragon" });
var fightRobotArmy2 = function (robots) {
    console.log("FIGHT!");
};
var dog = {};
dog.count;
// Function
var fightRobotArmy3 = function (robots) {
    console.log("FIGHT!");
};
var fightRobotArmy4 = function (robots) {
    console.log("FIGHT!");
    return 5;
};
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = "lalalala";
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal("RAWR");
lion.greet();
// Union
var confused = "hello"; // or 5 for example
// Type inference
var x = 4;
x = "hey"; // not explicitly stated, but TS inferred x as number

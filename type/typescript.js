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

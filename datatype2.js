// array type
var arr = [10, 20, 30];
console.log(arr);
var arr1 = [100, 200, 300];
console.log(arr1);
//tuple type
var a;
a = ["Bikash", 23];
console.log(a);
// a = [23,"Bikash"]; -> error ->Type 'number' is not assignable to type 'string' and vice-versa.
//enum type
var Color;
(function (Color) {
    Color[Color["Green"] = 1] = "Green";
    Color[Color["White"] = 2] = "White";
    Color[Color["Red"] = 3] = "Red";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
//Any type
var me = 'Anisha';
me = 20;
console.log(me);
//void
var her = undefined; //Declaring variables of type void is not useful because you can only assign null
her = null;
console.log(her);


// array type
let arr : number[] = [10,20,30];
console.log(arr);

let arr1 : Array<number> = [100,200,300];
console.log(arr1);

//tuple type
let a : [string, number];
a = ["Bikash",23];
console.log(a);

// a = [23,"Bikash"]; -> error ->Type 'number' is not assignable to type 'string' and vice-versa.

//enum type
enum Color{
Green = 1,
White,
Red
}
let c : Color = Color.Green;
console.log(c);

//Any type
let me : any = 'Anisha';
me = 20;
console.log(me);

//void
let her : void = undefined; //Declaring variables of type void is not useful because you can only assign null
her = null;
console.log(her);

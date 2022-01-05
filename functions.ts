function buildName(firstname : string, lastname : string, age : number){
    return firstname + " " + lastname + " " + age;
}
let persons = buildName('Kaushal','Ghimire',23);
console.log(persons);

let add = function( x: number, y: number){
    return x + y;
}
console.log(add);


function employees(name : string,salary : number){
    return name + " " + salary;
}
let empl = employees("Kaushal Ghimire",110000);
console.log(empl);

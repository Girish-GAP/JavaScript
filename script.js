// VARIABLES
// Declare variable  : var 
var a = 5;  // var is an old method

// new way to declare variable : let , const
let b = 10;

// constant variable
const x = 2;    
// x = 5;  // we can not change const variable value


let msg = "hi"; // 'hi' also valid

// -------------------------------------------

// OPERATORS

// shorthand operator
a += 2; // a = a + 2;
a++;    // a = a+1;
b--;    // b = b-1;

// Precedance in operation of operand and operators
let z = x + 5 / 5;  // 5/5 will execute first

// power : **
y = 2 ** 2;  // 2^2

// Addition of string and number
let j = 5;
let k = '6';
// console.log("string + number => ", j + k);   // 56

//--------------------------------------------------------

// DATA TYPES

// STRING
let g = 5;           // dynamic variables first store number
g = "hello";         // store string

// if our string contains single qoute inside it then use double qoute and vice versa
let s1 = "Hel'lo"       // Hel'lo
let s2 = 'Ho"la';       // Ho"la

// if we want double qoutation under doulbe qoutation then use \
s1 = "Hell\"o"      // Hell"o

// NUMBER 
let num = 5;
num = 5.5;

// BOOLEAN
let check = 2 > 3;  // false

// ARRAY
let arr = ["A", "B", "C"];
let arr2 = ["A", 2, 'String'];

// OBJECT : key value pair
let person = {} // empty object

person = {      // add properties
    name : "Girish",
    age : 21
}

person.name = "Ghansham";   // access / modify
person.lname = "Pawar";     // add new property
delete person.lname;        // delete property

let checkIf = 'name' in person;     // check the presence of propery return boolean value

for(let key in person){     // traverse through object
    console.log(key, person[key]);      // inside the loop always use array notation
    // *In this case, key is not a property of the object, 
    // it's a variable that holds the key of each property in the iteration.
}

// UNDEFINEED
let und;            // when no defined datatype


//--------------------------------------------------------

// type of varibale
let type = typeof 10;       // number

// template literal
let name = "Girish";
// use variable value inside string
console.log(`Hello ${name}`);   //  use backtick to use it 

//---------------------------------------------------------

// CONDITIONAL OPERATOR

// when we use == then we ignore datatype and compare as a string
console.log(5 == 5);    // true
console.log(5 == '5');  // true  // ignore data type     
console.log(6 == 5);    // false
console.log(5 != '4');  // false

// when we use === then first compare datatype and then value
console.log(5 === "5");  // false
console.log(5 !== '6');  // true

// check both conditions && ||
console.log((7 == 7 ) || (6 == 5));     // true
console.log((7 == 8 ) || (6 == 5));     // false

// not operator : reverse the decision
console.log(!(6 == 6))   // false
console.log(!(7 == 6))   // true
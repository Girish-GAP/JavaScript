// USER DATA TYPE CONVERSIONS
// 1. String();
// 2. Number();
// 3. Boolean();

let type = 4;
console.log(typeof type);   // number


// number -> string
let newType = String(type);
console.log(typeof newType);    // strings


// string -> number
newType = Number(newType);
console.log(typeof newType);    // number


// boolean -> number(1|0)
type = true;
newType = Number(type);
console.log(typeof newType);    // number


// string -> boolean        // non-empty string : true
type = "hello";     
newType = Boolean(type);
console.log(newType, typeof newType);    // true, boolean


type = "";          // if empty string : false
newType = Boolean(type);
console.log(newType, typeof newType);    // false, boolean
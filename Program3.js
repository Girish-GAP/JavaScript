// Number and strings

let type = "true";
console.log(typeof type);     // String   // check input before using

// AUTOMATIC CONVERSION 
type =  5 + null;  
console.log(typeof type, type);  // number   

type =  5 + '5';            // 55
console.log(typeof type, type);  // string  // confuse so goes with string

type =  6 - '5';            // 1
console.log(typeof type, type);  // number  // only arithmatic can happer with -

type =  6 * '5';            // 30
console.log(typeof type , type);  // number  // only arithmatic can happer with *

type =  '6' * '5';            // 30
console.log(typeof type, type);  // number  // only arithmatic can happer with *

type =  '6' * 'yes';             // NaN : not an number
console.log(typeof type, type);  // number  // only arithmatic can happer with * 



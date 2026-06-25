//without unicode only English chars
const string = "Hell0 @World!#2026";

const onlyChars = string.replace(/[^a-zA-Z]/g, "");

console.log(onlyChars); // "HellWorld" (output)
//
//
//

// method 2 with unicodes

const string2 = "Héllo 世界 123!";

const result = string2.replace(/[^\p{L}]/gu, "");

console.log(result); // "Héllo世界" (output)

const string3 = "#QuantumTiger88$:";
//
//
//

// Printing the partial String

const str = "Abhi123!@#XYZ789$%^";

const stringOne = str.match(/[A-Za-z]+/g);

console.log(stringOne[0]); // Abhi
console.log(stringOne[1]); // XYZ

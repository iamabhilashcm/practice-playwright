
//without unicode only English chars
const str = "Hell0 @World!#2026";

const onlyChars = str.replace(/[^a-zA-Z]/g, "");

console.log(onlyChars); // "HellWorld" (output)


// method 2 with unicodes

const str = "Héllo 世界 123!";

const result = str.replace(/[^\p{L}]/gu, "");

console.log(result); // "Héllo世界" (output)








const str = "#QuantumTiger88$:";

//without unicode only English chars
const str = "Hell0 @World!#2026";

const onlyChars = str.replace(/[^a-zA-Z]/g, "");

console.log(onlyChars); // "HellWorld" (output)


// method 2 with unicodes

const str = "Héllo 世界 123!";

const result = str.replace(/[^\p{L}]/gu, "");

console.log(result); // "Héllo世界" (output)



const str = "#QuantumTiger88$:";

prompt chatGPT
 Assume you have 12+ years of experience in the playwright and Prepare me for mock interview for the playwright with typescript, me who is having 2 years of playwright with typescript experience and 3 years of manual testing, in the interview questions include basic scripting questions and also on the playwright, javascript and typescript include basic to advance questions 


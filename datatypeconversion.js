let score = null

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)//=>NaN if the value is not a number or cannot be converted to a number
//null = 0 if the value is null 
//if score is true then it become 1

//"33" => 33
// "33abc" => NaN
// true => 1; false => 0 ,"" empty string => false

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);

let isLoggedIn = 1
let booleanValue = Boolean(isLoggedIn)
console.log(typeof booleanValue);
console.log(booleanValue);








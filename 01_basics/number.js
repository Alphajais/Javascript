const number = 500
console.log(number);
 
const number1 = new Number(500)
console.log(number1);
console.log(number1.toString());
console.log(typeof number1);
console.log(number1.toFixed(3));
const num = 23.985
console.log(num.toPrecision(12));
const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));
console.log(Math.round(2.3));
console.log(Math.max(2,3));


const max= 40
const min = 5
console.log(Math.floor(Math.random()*(max-min+1))+min);

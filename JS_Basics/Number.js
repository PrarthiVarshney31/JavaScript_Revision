const score=100;
const balance=new Number(100)
// console.log(score);
// console.log(balance);
// console.log(balance.toString);
// console.log(balance.toFixed(2));
// console.log(balance.toFixed(5));
const a1=123.45678;
// console.log(a1.toPrecision(3));
// console.log(a1.toPrecision(4));
const a2=123.5678;
// console.log(a2.toPrecision(3));
const a3=1000000000;
console.log(a3.toLocaleString('en-IN'));
// --------------------------------------------------------MATH-----------------------------------------------
console.log(Math.abs(-4));
console.log(Math.round(6.6858));
console.log(Math.ceil(4.75));
console.log(Math.floor(6.86));
// Math.ramdom mein 0 se 1 ke beech ki value aur 0 included hai
console.log(Math.random());
console.log((Math.random()*10)+1);

// To Get Minimum Number in Given Range
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);

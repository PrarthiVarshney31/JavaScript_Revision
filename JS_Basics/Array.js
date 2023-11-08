const arr1=[0,1,2,3,"Hello"];
const arr2=new Array("Happy","Khush");
console.log(arr2[1]);
// arr1.push(7);
// arr1.push(8);
// arr1.pop();
// arr1.unshift(9);        //starting mei add krte hai
// console.log(arr1);
// arr1.shift();
// console.log(arr1);
// console.log(arr1.includes(19));
// console.log(arr1.indexOf(48));

const newarr1=arr1.join();  //array ko string form mein likhdeta hai
// console.log(arr1);
// console.log(newarr1);
// console.log(typeof newarr1);

// slice,splice
// console.log("A ",arr1);
const myn1=arr1.slice(1,3);
// 1 aur 2 include honge 
// slice se original array mei koi change nhi hota

// console.log(myn1);
// console.log("B ",arr1);

// console.log("C ",arr1);
const myn2=arr1.splice(1,3);
// 1 ,2 aur 3 include honge 
// splice operation mein jo part splice kia hai wo original array se remove ho jaega
// console.log(myn2);
// console.log("D ",arr1);


// -----------------Lecture-2--------------
const arry1=["red","blue","green"];
const arry2=["sun","water"];
// arry1.push(arry2);
// console.log(arry1);
// console.log(arry2[1]);
// console.log(arry1[3][1]);

// concat ek nayi array bnata hai
const arry3=arry1.concat(arry2);
// console.log(arry3);

// ... ka mtlb spread kr rhe hai isko use krke hum more than 2 array ko join kr skte hai
const arry4=[...arry1,...arry2];
// console.log(arry4);

// flat sare array ke elements ko spread kr dega
const arry5=[1,2,3,4,[5,6,[7,8]],[9,8]];
const arry6=arry5.flat(Infinity);
// console.log(arry6);

// console.log(Array.isArray("abc"));
// console.log(Array.from("abc"));
// console.log(Array.from({name:"abc"})); // Array nhi bna paega isliye empty array return krdega
 
let a1=100;
let a2=200;
let a3=300;
console.log(Array.of(a1,a2,a3));



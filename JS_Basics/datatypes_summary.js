// Primitive Datatype
const a=1;
const b="abc";
const c=true;
const d=null;
let e;
const f=Symbol('123');
const g=Symbol('123');
console.log(f);
console.log(g);
console.log(f===g);
const bignum=123456789n;

// Non-Primitive
const heros=["Spiderman","Ninja","Doga"];

let myObj={
    name:"Prarthi",
    age:20
}

const f1=function myfun() {
    console.log("This is My First Function");
    
}
f1();





// ---------------------------------MEMORY--------------------------------------
// Primitive--> STACK

let s1="happy";
let snew=s1;
// A copy of s1 will be copied to snew
console.log(snew);
snew="happy2";
console.log(s1);
console.log(snew);

// Non-Primitive-->HEAP
let obj1={
    name:"Prarthi",
    num:30
}
// Both will Reference to Same
let obj2=obj1;

obj2.name="Prarthi Varshney";
console.log(obj2.name);
console.log(obj1.name);
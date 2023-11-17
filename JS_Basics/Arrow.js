// this-->This Keyword Make Current Context Value


const user={
    name:"Prarthi",
    price:200000,
    welcomemsg:function () {
        console.log(`${this.name},welcome`);
        // console.log(this);       -->As This Keyword return current context so it will return object user
    }
}
// user.welcomemsg();

// Value change in object will affect change in value for child also
user.name="Prarthi Varshney";
// user.welcomemsg();

// As we are in Node Environment this--> refer to Empty Object Kyuki Global Ke Andr Koi Context hi nhi hai
// Aur Browser mein this window global object ko refer krta hai toh window object aata hai return mein

// console.log(this);

function fun1() {
    console.log(this);
    // console.log(this.username);-->undefined
    // this keyword object mein kaam krta hai function mein nh

}
// fun1();
// object milega Jismein Bahut Sare Key-Value Pair honge

const hey=function fun2() {
    const username="Prarthi"
    // console.log(this.username);-->undefined
}
// hey();  


// ------------------------ARROW FUNCTION----------------------
const arrowfun1=()=>{
    let username="Roli"
    // console.log(this.username);      ---->undefined
    console.log(this);
}
// arrowfun1();

const addnum=(num1,num2)=>{
    return num1+num2;
}
console.log(addnum(3,4));
 
// Implicit Arrow return Function 
//when statement is of only one line
const addnum2=(num1,num2)=>num1+num2;
// console.log(addnum2(3,5));
const addnum3=(num1,num2)=>(num1,num2);
// console.log(addnum3(3,6));

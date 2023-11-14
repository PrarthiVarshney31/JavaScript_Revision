function sayMyName() {
//  console.log("Prarthi Varshney");   
}
sayMyName();
// function addnum(num1,num2) {
//     console.log(num1+num2);
// }
// addnum(3,"a");
// addnum("a","b");
// addnum(3,null);
// addnum("a",null);

// addnum(3,4);
// const result=addnum(3,4);                7
// console.log(result);             7
// console.log(typeof result);          undefined kyunki console kra rhe h return nhi

function addnum2(num1,num2) {
    let res=num1+num2;
    return res;
    console.log("Happy"); //yeh print nhi hoga kyuki return krne ke baad function nhi chlta hai

}
// console.log(addnum2(2,6));

function loginusermessage(username) {
    if (username==undefined) {
        return;
    }
    return `${username} just logged in`;
}

// agr hum function call mein kuch pass nhi krenge toh bydefault sam as username use hoga
// aur agr pass kia toh over write ho jaega
function loginusermessage2(username="sam") {
    if (username==undefined) {
        return;
    }
    return `${username} just logged in`;
}



// console.log(loginusermessage("Prarthi"));
// console.log(loginusermessage()); // undefined


// ------------------------Lecture-2--------------------
// function mei multiple value kese pass krte hai
// using rest(...)
function calculate1(num1) {
    return num1;
}

// console.log(calculate1(100));                100
// console.log(calculate1(100,200));                100

function calculate2(...num1) {
    return num1;
}
// console.log(calculate2(100,200));                Array of Muliple Arguments Passed in the Function Calling will be return

function calculate3(val1,val2,...num1) {
    return num1;
}
// console.log(calculate3(100,200,300,400,500,600));
// Extra arguments will pass in rest variable to form array

function objpassing(obj1) {
    return `hello ${obj1.name} from ${obj1.address}`
    
}
console.log(objpassing({
    name:"Prarthi",
    address:"S.Rao"
}));

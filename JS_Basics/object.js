// singleton (Object)
//  jb bh hum literal ki trh declare krte h singleton nhi bn pata
// constructor se bnega toh singleton hota h
// Object.create-->constructor method

// object literals

const mysym=Symbol("key1");
const userdata={
    name:"Roli",
    [mysym]:"mykey1",
    age:32,
    location:"Hathras",
    mail:"abc.com"
}
// console.log(userdata.mail);
// console.log(userdata["mail"]);
// console.log(userdata[mysym]);

userdata.name="Roli Varshney";
// console.log(userdata);

// Applying Freeze --> No Changes will be propagated
// Object.freeze(userdata);
userdata.age=33;
// console.log(userdata);

// greeting
userdata.greeting=function () {
    console.log("Hello Userdata");
}

console.log(userdata.greeting);
console.log(userdata.greeting());

userdata.greeting2=function () {
    console.log(`Hello User,${this.name}`);
}
console.log(userdata.greeting2());

// Singleton Object
const tinder1=new Object();
console.log(tinder1);

//Non Singleton Object
const tinder2={};

const user={
    id:12345,
    email:"abc.com",
    age:23,
    fullname:{
        first:"Prarthi",
        Last:"Varshney"
    }
}
console.log(user.fullname);     //object of first,Last
console.log(user.fullname.first); //Prarthi
// console.log(user.fullname?.first);  --> Agr fullname exist krta hoga toh wrna if else krwaenge

// Combining Objects

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
// const ob3={obj1,obj2};   object of two objects will be form

// To form object from elements of 2 or more objects
// const ob3=Object.assign({},obj1,obj2)  
// object obj3 will contain all elements of obj1,obj2

//  const obj3=Object.assign({},obj1,obj2,obj4)
// {}-->target
//obj1,2,4-->source


//  To Combine Oject Using Spread
const obj3={...obj1,...obj2}
// one obj of elements of bj1 nd obj2

// console.log(Object.keys(objname));
// console.log(Object.values(objname));
// console.log(Object.entries(objname));       Array of key-value pair array

console.log(objname.hasOwnProperty('email'));       //check property exist or nt=ot

// value can also be fetch without dot
// const {email:id}=user;       -->destructuring
// console.log(email)
// console.log(id);




 

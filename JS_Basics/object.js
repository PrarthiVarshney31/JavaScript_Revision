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
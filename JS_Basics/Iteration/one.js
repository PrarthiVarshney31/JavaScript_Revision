// ----------------------------------for------------------------------

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// ---------------------------------break and continue---------------------------------------

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        continue
    }
//    console.log(`Value of i is ${index}`);
    
}

// ----------------------------while---------------------------

let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray2 = ['flash', "batman", "superman"]

let arr1 = 0
while (arr1 < myArray2.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr1 = arr1 + 1
}


// ------------------------------------------------------do while----------------------------------------------
let score = 11

do {
    // console.log(`Score is ${score}`);
    score++
} while (score <= 10);


// ---------------------------------for of----------------------------------------

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//  for (const [key, value] of myObject) {
    // console.log(key, ':-', value);               ---->Error(Not Iterable)
    
//  }

//  ----------------------------------for in ---------------------------------------

 const myObject2 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject2) {

    console.log(`${key} shortcut is for ${myObject2[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

const map2 = new Map()
map2.set('IN', "India")
map2.set('USA', "United States of America")
map2.set('Fr', "France")
map2.set('IN', "India")

for (const key in map2) {
    console.log(key);
}
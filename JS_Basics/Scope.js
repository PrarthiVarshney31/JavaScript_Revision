// Global Scope
if (true) {
    // Block Scope
    let a=20;
    const b=30;
    var c=40;
    // console.log("Inner a",a);
}

// console.log(a);     // error
// console.log(b);      error
// console.log(c);      40 scope ke bahr value access hori hai

// Scope ke bahr value access nhi kr skte

const a=100;
// console.log(a);

// ---------------------Lecture-3---------------------
function one() {
    const name="Prarthi"
    function two() {
        const website="YouTube"
        console.log(name);
    }
    two();
}
// one();
// Child Parent ki cheez use kr skta hai kyuki wo uske liye global hai
// But Parent Child ke cheeje use nhi kr skte kyuki child ki cheeje block level hai

//Aur Agr Yhi Same cheej Hum if mei krein aur variable extract krne ki koshish krein
//  toh error aaega kyuki if mei declare kiye huye variable block level nhi hote hai


// Simple Function ko Delaration se pehle call krenge toh chalega

console.log(addOne(5));
function addOne(n){
    return n+1;
}

//Yahaan Function ko Variable Hold kr rha hai Isliye Agr Pehle Call krenge toh Error Ayegi
const n=5;
const addTwo=function(n) {
    return n+2;
    
}
console.log(addTwo(5));
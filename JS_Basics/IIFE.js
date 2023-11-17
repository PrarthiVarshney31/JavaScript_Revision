// Immediately Invoked Function Expressions(IIFE)

// ()()
// first paranthesis for fun definition and second for execution call

(function hello() {
    // It is a Named IIFE
    console.log("Hello Everyone");
})();

(()=>{
    console.log("Arrow Function IIFE");
})();

(()=>{
    console.log("My Name is ${name}");
})("Prarthi");

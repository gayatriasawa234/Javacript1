{
    const x = 10;
  
    console.log(x);
}
// console.log(x);     // ReferenceError: x is not defined

function fun() {
    // console.log(y);     // ReferenceError: y is not defined
    const y = 20;
    console.log(y);
}
fun();
// console.log(y);     // ReferenceError: y is not defined

// ----------------------------------XXXXXXXXXX------------------------------------------ //

const a = 15;
// const a = 25;      // const does not allow redeclaration. 
                    //        - "SyntaxError: Identifier 'a' has already been declared"

// ----------------------------------XXXXXXXXXX------------------------------------------ //

// const will not give compconste global scope if declared outside any block, unlike var.
// console.log(d);     // ReferenceError: Cannot access 'd' before initialization
const d = "tarun";
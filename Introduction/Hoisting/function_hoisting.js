hoistedFunction(); // "Hello, World!"

function hoistedFunction() {
  console.log("Hello, World!");
}

function hoistedFunction() {
    console.log("Hello, World!");
  }
  
  hoistedFunction(); // "Hello, World!"

//   Function declarations are fully hoisted, meaning both the function definition and the body are hoisted to the top of their scope.
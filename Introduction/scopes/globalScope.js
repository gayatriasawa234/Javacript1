let company = "Microsoft";                    
let age = 10;
function greet() {
    console.log("greetings ! ", company, " , ", age);

    function test() {
        console.log("test");
    }
      test();
}
function fun() {
    console.log("have funs ! ", company, " , ", age);
}
greet();
fun();

// test(); /// this will throw error :- "ReferenceError: test is not defined"
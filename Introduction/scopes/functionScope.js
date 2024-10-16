function fun() {
    let x = 10;
    console.log("x is : ", x);
    function test() {
        console.log("inside nested function : ", x);
        function nested() {
            console.log("Nested", x);
        }
        nested();
    }
    test();
}


fun();
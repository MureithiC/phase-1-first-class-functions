// Function that receives a function and calls it
function receivesAFunction(callback) {
    console.log("Function receivesAFunction is about to call the callback function.");
    callback();
}

// Function that returns a named function
function returnsANamedFunction() {
    function namedFunction() {
    console.log("This is a named option");
}
    return namedFunction;
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        console.log("This ia an anonymous function.");
    };
}
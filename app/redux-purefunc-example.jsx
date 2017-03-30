var  redux = require("redux");

console.log("Starting redux example, Pure Function");

// Pure function 
// `````````````

// 1) its always gone a return the same result given the same input
// 2) no side effect. it can take variable on the global state and shouldn't be update any variable outside of it
// 3) avoid promises and asynchronous call. your function could be synchronous   
function add(a, b) {
    return a + b;
}

console.log(add(1,4));

// Non-Pure function
// `````````````````

// bcoz its relies on outside variable "a"
var a = 3;
function add(b) {
    return a + b;
}

//bcoz our function update value outside of it. it has side effect that it update the variable
var result;
function add(a, b) {
    result = a + b;
    return result;
}

// bcoz output depends on the current seconds, so output is always different
function add(a, b) {
    return a + b + new Date().getSeconds();
}

function changeProp(obj) {
    return {
        ...obj,
        name: "Ahmed"
    };
    
    //obj.name = "Ahmed"
    //return obj;    
}

var res = changeProp({
    name: "Junaid",
    age: 25
});

console.log(res);

// without updating original variable

function changeProperty(obj2) {
    return {
        ...obj2,
        name2: "Ahmed"
    };
    
// if we comment the above return and un comment the below return then it become non-pure function

    // obj2.name2 = "Ahmed"
    // return obj2;    
}

var startingValue = {
    name2: "Junaid",
    age2: 25
};

var res2 = changeProperty(startingValue);

console.log(startingValue);
console.log(res2);



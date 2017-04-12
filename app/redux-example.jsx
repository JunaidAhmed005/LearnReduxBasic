var  redux = require("redux");

console.log("Starting redux example");

var reducer = (state = {name: "Anonmous"}, action) => {
    // this is es5 method of defining default value, above is es6
    //state = state || {name : "Anonymous"}

    return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log("Current State: ", currentState);

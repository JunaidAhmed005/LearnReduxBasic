var  redux = require("redux");

console.log("Starting redux example");

var reducer = (state = {name: "Anonmous"}, action) => {
    // this is es5 method of defining default value, above is es6
    //state = state || {name : "Anonymous"}

    //console.log("New Action", action);
    switch (action.type) {
        case "CHANGE_NAME":
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }
};

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// f => f is the short form of: 
// (f) => {
//     return f;
// }

//Subscribe to changes
var unsubscribe = store.subscribe(()=> {
    var state = store.getState();

    console.log("Name is: ", state.name);
    document.getElementById("app").innerHTML = state.name;
});

var currentState = store.getState();
console.log("Current State: ", currentState);

var action = {
    type: "CHANGE_NAME",
    name: "Junaid"
};

store.dispatch(action);

//unsubscribe();
store.dispatch({
    type: "CHANGE_NAME",
    name: "Ahmed"
});

//console.log("Name should be Junaid", store.getState());

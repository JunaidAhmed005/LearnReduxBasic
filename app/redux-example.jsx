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

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log("Current State: ", currentState);

var action = {
    type: "CHANGE_NAME",
    name: "Junaid"
};

store.dispatch(action);

console.log("Name should be Junaid", store.getState());

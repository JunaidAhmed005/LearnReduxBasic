var redux = require("redux");

console.log("Starting redux-todo-example");

var stateDefault = {
    searchText: "",
    showCompleted: false,
    todos: []
};
var reducer = (state = stateDefault, action) => {

    switch (action.type) {
        case "CHANGE_SEARCH_TEXT":
            return {
                ...stateDefault,
                searchText: action.searchText
            };
        default:
            return state;
    }
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log("CurrentState", currentState);

var action = {
    type: "CHANGE_SEARCH_TEXT",
    searchText: "Some new text"
}

store.dispatch(action);
console.log("searchText should be \"Some new text\".", store.getState());

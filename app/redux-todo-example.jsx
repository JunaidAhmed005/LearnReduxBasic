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

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes
var unsubscribe = store.subscribe(()=> {
    var state = store.getState();

    document.getElementById("app").innerHTML = state.searchText;
});

var currentState = store.getState();
console.log("CurrentState", currentState);

var action = {
    type: "CHANGE_SEARCH_TEXT",
    searchText: "Some new text"
}

store.dispatch(action);

store.dispatch({
    type: "CHANGE_SEARCH_TEXT",
    searchText: "Some other text"    
});

store.dispatch({
    type: "CHANGE_SEARCH_TEXT",
    searchText: "Something else"    
});
//console.log("searchText should be \"Some new text\".", store.getState());

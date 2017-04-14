var  redux = require("redux");

console.log("Starting redux example");

var stateDefault = {
    name: "Anonmous",
    hobbies: [],
    movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

var nameReducer = (state = "Anonymous", action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            return action.name;
        default:
            return state;
    }
};

var hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_HOBBY":
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];
        case "REMOVE_HOBBY":
            return state.filter((hobby) => hobby.id !== action.id);
        default:
            return state;
    }
};

var moviesReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_MOVIE":
            return [
                ...state,
                {
                    id: nextMovieId++,
                    title: action.title,
                    genre: action.genre
                }
            ];
        case "REMOVE_MOVIE":
            return state.filter((movie) => movie.id !== action.id);
        default:
            return state;
    }
};

var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
});

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

    console.log("New State", store.getState());
});

var currentState = store.getState();
console.log("Current State: ", currentState);

var action = {
    type: "CHANGE_NAME",
    name: "Junaid"
};

store.dispatch(action);

store.dispatch({
    type: "ADD_HOBBY",
    hobby: "Running"
});

store.dispatch({
    type: "ADD_HOBBY",
    hobby: "Walking"
});

store.dispatch({
    type: "REMOVE_HOBBY",
    id: 2
});

//unsubscribe();
store.dispatch({
    type: "CHANGE_NAME",
    name: "Ahmed"
});

store.dispatch({
    type: "ADD_MOVIE",
    title: "Mad Max",
    genre: "Action"
});

store.dispatch({
    type: "ADD_MOVIE",
    title: "Star Wars",
    genre: "Action"
});

store.dispatch({
    type: "REMOVE_MOVIE",
    id: 1
});

//console.log("Name should be Junaid", store.getState());

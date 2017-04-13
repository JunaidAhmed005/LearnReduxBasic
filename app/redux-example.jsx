var  redux = require("redux");

console.log("Starting redux example");

var stateDefault = {
    name: "Anonmous",
    hobbies: [],
    movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

var reducer = (state = stateDefault, action) => {
    // this is es5 method of defining default value, above is es6
    //state = state || {name : "Anonymous"}

    //console.log("New Action", action);
    switch (action.type) {
        case "CHANGE_NAME":
            return {
                ...state,
                name: action.name
            };
        case "ADD_HOBBY":
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            };
        case "REMOVE_HOBBY":
            return {
                ...state,
                hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id )
            };
        case "ADD_MOVIE":
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        title: action.title,
                        genre: action.genre
                    }
                ]
            };
        case "REMOVE_MOVIE":
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.id)
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

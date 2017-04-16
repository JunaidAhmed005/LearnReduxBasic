var redux = require("redux");
var thunk = require("redux-thunk").default;
var {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require("./../reducers/index");

export var configure = () => {
    var reducer = redux.combineReducers({
        name: nameReducer,
        hobbies: hobbiesReducer,
        movies: moviesReducer,
        map: mapReducer
    });

    var store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    // f => f is the short form of: 
    // (f) => {
    //     return f;
    // }

    return store;

};
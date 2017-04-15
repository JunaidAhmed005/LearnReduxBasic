var  redux = require("redux");

console.log("Starting redux example");

var actions = require("./actions/index");
var store = require("./store/configureStore").configure();

//Subscribe to changes
var unsubscribe = store.subscribe(()=> {
    var state = store.getState();


    console.log("New State", store.getState());

    if (state.map.isFetching) {
        document.getElementById("app").innerHTML = "Loading...";    
    } else if(state.map.url) {
        document.getElementById("app").innerHTML = "<a href='"+ state.map.url +"' target='_blank'>View your Location</a>";        
    }
});

var currentState = store.getState();
console.log("Current State: ", currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName("Junaid"));

store.dispatch(actions.addHobby("Running"));
store.dispatch(actions.addHobby("Walking"));

store.dispatch(actions.removeHobby(2));

//unsubscribe();
store.dispatch(actions.changeName("Ahmed"));

store.dispatch(actions.addMovie("Mad Max","Action"));
store.dispatch(actions.addMovie("Star Wars","Action"));

store.dispatch(actions.removeMovie(1));

//console.log("Name should be Junaid", store.getState());

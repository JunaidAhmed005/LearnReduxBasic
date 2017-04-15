var axios = require("axios");
// Name action generator
//----------------------

export var changeName = (name) => {
    return {
        type: "CHANGE_NAME",
        name  
        //this is es6 form of defining
        //name: name
    };
};

// Hobbies action generator
//----------------------

export var addHobby = (hobby) => {
    return {
        type: "ADD_HOBBY",
        hobby
    };
};

export var removeHobby = (id) => {
    return {
        type: "REMOVE_HOBBY",
        id: id
    };
};

// Movies action generator
//----------------------

export var addMovie = (title, genre) => {
    return {
        type: "ADD_MOVIE",
        title,
        genre
    };
};

export var removeMovie = (id) => {
    return {
        type: "REMOVE_MOVIE",
        id
    };
};

// Map action generator
//----------------------

export var startLocationFetch = () => {
    return {
        type: "START_LOCATION_FETCH"
    };
};

export var completeLocationFetch = (url) => {
    return {
        type: "COMPLETE_LOCATION_FETCH",
        url
    };
};

export var fetchLocation = () => {
    return (dispatch, getState) => {
        dispatch(startLocationFetch());

        axios.get('https://ipinfo.io').then(function (res){
            var loc = res.data.loc;
            var baseUrl = 'https://maps.google.com?q=';
            //console.log(baseUrl + loc);
            dispatch(completeLocationFetch(baseUrl + loc));
        });
    };
};

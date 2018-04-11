require("dotenv").config();

// Add the code required to import the keys.js file and store it in a variable.
// create all require variables needed
var request = require("request");
var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// Make it so liri.js can take in one of the following commands:

// USE SWITCH STATEMENTS!!!

// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says

//-------------------------------------------

//node liri.js my-tweets This will show your last 20 tweets and when they were created at in your
//terminal/bash window.}

//first we create a variable to store the inline command
// then we create a swith statement to orangzie the commands
// each command calls a function in the switch statement for that command

var command = process.argv[2];

switch(command){
    case "myTweets":
    myTweets();
    break;

    case "spotifyThisSong":
    mySpotify();
    break;

    case "movieThis":
    movieThis();
    break;

    case "do-what-it-says":
    doWhatItSays();
    break;
};

// if the myTweets function is called

function myTweets(){
    var userName = process.argv[2]; 
    var twitterURL = "https://api.twitter.com/1.1/search/tweets.json?q=" + userName + "&result_type=recent";
    // var twitterURL = "twurl /1.1/search/tweets.json?q=" + userName + "&result_type=popular";
    request(twitterURL, function(error, response, body) {
        if(error){
            console.log("Stop");
        }
        else{
        console.log(JSON.parse(body).followers_count);
        console.log("I tweeted!");
        }
    },
    )}


function movieThis(){
    if(process.argv.length > 4){
        movieName = process.argv[3] + " " + process.argv[4]
    }
    else if(movieName = process.argv[3]){
        
    }
    else{
        movieName = undefined;
        console.log("Mr. Nobody");
    }
    var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    request(queryURL, function(error, response, body) {
        console.log(JSON.parse(body).Title);
        console.log(JSON.parse(body).Year);
        console.log(JSON.parse(body).imdbRating);
        console.log(JSON.parse(body).Lanuage);
        console.log(JSON.parse(body).Plot);
        console.log(JSON.parse(body).Actors);
        // console.log( JSON.parse(body).Year);
        // console.log( JSON.parse(body).Year);
    });}

    function mySpotify(); {
        var spotifyURL = 0;
        var song = 0;

        request(spotifyURL, function(error, response, body ){
            console.log(JSON.parse(body));
        })
    }

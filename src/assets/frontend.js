var pricebtc = 0;
var priceusd = 0;
var volumeion = 0;
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "YOUR FIREBASE API KEY",
    authDomain: "YOUR FIREBASE AUTH DOMAIN",
    databaseURL: "YOUR FIREBASE DATABASE URL",
  };
  firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

// Function to update values
var updateValue = function(element, value) {
    element.textContent = value;
};

var pricebtcRef = firebase.database().ref('price-btc/price');
//var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
pricebtcRef.on('value', function(snapshot) {
  updateValue(btcPrice, snapshot.val());
});

var priceusdRef = firebase.database().ref('price-usd/price');
//var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
priceusdRef.on('value', function(snapshot) {
  updateValue(usdPrice, snapshot.val());
});

var volumeionRef = firebase.database().ref('volume-ion/volume');
volumeionRef.on('value', function(snapshot) {
  updateValue(ionVolume, snapshot.val());
});
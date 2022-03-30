// Import the functions you need from the SDKs you need
var  admin  = require("firebase-admin");
var config = require("./config");


// Initialize
// console.log(config);
const appFirebase = admin.initializeApp({
  credential: admin.credential.cert(config),
  databaseURL: "https://reacttraking.firebaseio.com"
});

module.exports = appFirebase;

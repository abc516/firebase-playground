const firebase = require('firebase')

// -- // -- // -- // Firebase Config // -- // -- // -- //
const config = {
  apiKey: "AIzaSyCIKjTNv3IsEb9T6Ps6DWkrg74RQFXcUuU",
  authDomain: "fir-playground-ef6cb.firebaseapp.com",
  databaseURL: "https://fir-playground-ef6cb.firebaseio.com",
  projectId: "fir-playground-ef6cb",
  storageBucket: "fir-playground-ef6cb.appspot.com",
  messagingSenderId: "1011776468920"
}
// -- // -- // -- // -- // -- // -- // -- // -- // -- //

// Initialize the app, but make sure to do it only once.
//   (We need this for the tests. The test runner busts the require
//   cache when in watch mode; this will cause us to evaluate this
//   file multiple times. Without this protection, we would try to
//   initialize the app again, which causes Firebase to throw.
//
//   This is why global state makes a sad panda.)
firebase.__bonesApp || (firebase.__bonesApp = firebase.initializeApp(config))

module.exports = firebase

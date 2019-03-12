var provider = new firebase.auth.GoogleAuthProvider();
var user;

$('#google').on('click',signIn);
function signIn(){
    //  console.log('signin')
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        user = result.user;
        // console.log(user.displayName);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}

function writeUserData(name, email) {
  firebase.database().ref('users/' + user.uid).set({
    name: user.displayName,
    email: user.email
  });
}
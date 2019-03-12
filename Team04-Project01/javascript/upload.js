$('.box__file').on('change',handleFileUploadChange);
$('.box__button').on('click',handleFileUploadSubmit);

// let selectedFile;

// function handleFileUploadChange(e) {
//     selectedFile = e.target.file[0];
// }

// function handleFileUploadSubmit(e){
//     const uploadTask = storageRef.child(`images/${selectedFile.name}`).put(selectedFile); 
//     //create a child directory called images, and place the file inside this directory
//     uploadTask.on('state_changed', (snapshot) => {
//     // Observe state change events such as progress, pause, and resume
//     }, (error) => {
//       // Handle unsuccessful uploads
//       console.log(error);
//     }, () => {
//        // Do something once upload is complete
//        console.log('success');
//     });

// }

// show img afer upload
function readURL(input){
  if(input.files && input.files[0]){
    var reader = new FileReader();

    reader.onload = function(e){
      $('#blah').attr('src',e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

var selectedFile;

$('#file').on('change',function(event){
    selectedFile = event.target.files[0];
})



function uploadFile(){
    // Create a root reference
var filename = selectedFile.name;
var storageRef = firebase.storage().ref('/user/' + filename);
// var fileRef = storage().child(filename)
var uploadTask = storageRef.put(selectedFile)
}

// google signin
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

// store info into database
$('').on('',function(event){
    var text = ($event.relatedTarget).text();
    firebase.database().ref('users/'+user.uid).set({
        name: user.displayName,
        email:user.email,
        history:text
    })


})
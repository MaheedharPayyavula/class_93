// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAiSx-1uL-joN1coojmsidXiwbJUe7tmn0",
      authDomain: "lets-chat-web-app-21f86.firebaseapp.com",
      projectId: "lets-chat-web-app-21f86",
      storageBucket: "lets-chat-web-app-21f86.appspot.com",
      messagingSenderId: "1029444291556",
      appId: "1:1029444291556:web:d96cf42418fee5607015f1"
    };
    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

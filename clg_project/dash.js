(function(){

    var firebaseConfig = {
        apiKey: "AIzaSyBOXat0YEaEeRMSqj9YKkfG9kGpCWVPFUo",
        authDomain: "project-ffaeb.firebaseapp.com",
        datbaseURL: "https://project-ffaeb-default-rtdb.firebaseio.com/",
        projectId: "project-ffaeb",
        storageBucket: "project-ffaeb.appspot.com",
        messagingSenderId: "75461630156",
        appId: "1:75461630156:web:53a74ffa24c5b546f20a69"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);


      const preobject = document.getElementById("Moisture");
      const prehumidity = document.getElementById("Humidity");
      const pretemp = document.getElementById("Temprature");
      const prewlevel = document.getElementById("Waterlevel");

      const dbRefObject = firebase.database().ref().child('Moisture');
      const dbRefhumidity = firebase.database().ref().child('Humidity');
      const dbRefpretemp = firebase.database().ref().child('Temprature');
      const dbRefprewlevel = firebase.database().ref().child('Waterlevel');


      dbRefObject.on('value', snap => {
          preobject.innerHTML = snap.val();
          console.log(snap.val());
      });
      dbRefhumidity.on('value', snap => {
        prehumidity.innerHTML = snap.val();
        console.log(snap.val());
    });

    dbRefpretemp.on('value', snap => {
        pretemp.innerHTML = snap.val();
        console.log(snap.val());
    });

    dbRefprewlevel.on('value', snap => {
        prewlevel.innerHTML = snap.val();
        console.log(snap.val());
    });


}());
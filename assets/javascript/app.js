$(document).ready(function(){
   

    $("#divDropdown").hide();

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // Menu button on click;
    $("#btnMenu").on("click", function(){
        $("#divDropdown").toggle ();
    });

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // Down arrow click

    $("#btnArrow").on("click",function(e) {
        debugger;
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(this).offset().top},500);
    });


    var config = {
        apiKey: "AIzaSyBXHhqgb-e5jirVkCNUWT_-KRv9ORAfeNg",
        authDomain: "projectportfolio-716ce.firebaseapp.com",
        databaseURL: "https://projectportfolio-716ce.firebaseio.com",
        projectId: "projectportfolio-716ce",
        storageBucket: "projectportfolio-716ce.appspot.com",
        messagingSenderId: "24314421763",
        appId: "1:24314421763:web:7ea835ad30cdc86c"
      };
      
      firebase.initializeApp(config);
      
      var database = firebase.database();

      $("#btnSubmit").on("click",function(event){
        event.preventDefault();

        var userName = $("#userName").val().trim();
        var password = $("#password").val().trim();

        // var userLogin = {
        //     name : userName,
        //     password : password 
        // }
        var databaseUser = database.ref().child("user");
        database.ref("/user").child.on("value",function(snapshot){
    
            
        
            // Then we console.log the value of snapshot
           
            var data = snapshot.val();
            console.log(data);
            var keys = Object.keys(data);

        //    console.log(snapshot.val().child(keys));

            var loginName ;
          
            var loginPassword = snapshot.val().password;


            if ((loginName === userName) && (loginPassword === password)){
                console.log("true");
            }
            else
            {
                console.log("false");
            }
            // Update the clickCounter variable with data from the database.
            // clickCounter = snapshot.val().clickCount;
      
            // Then we change the html associated with the number.
            // $("#click-value").text(snapshot.val().clickCount);
      
            // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
            // Again we could have named errorObject anything we wanted.
          }, function(errorObject) {
      
            // In case of error this will print the error
            console.log("The read failed: " + errorObject.code);
          });

          
      });

     
      
})
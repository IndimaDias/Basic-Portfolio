$(document).ready(function(){
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

      $("#divDropdown").hide();

      loadProjects();


    $("#btnMenu").on("click", function(){
        $("#divDropdown").toggle ();
    });

      function isOdd(i){
          if(i%2 == 0){
              return false
          }
          else{
              return true;
          }

      }


      function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      
      function loadProjects (){
        
        // this function will dynamically build a card for each record in the database 
        // this card includes the image, and the link to the page 
       
        var divRow = $("<div>");
        

        divRow.addClass("cardRow row");
        divRow.attr("id","divProjects");
        var i = 0;
        database.ref("projects/")
        .orderByChild('timestamp')
        .on("child_added",function(snapshot){
           
            var data= snapshot.val();
            console.log(data);
                i += 1;
                
                var cardImage = $("<div>");
                cardImage.addClass("card-image col l8");
        
                var proImage = $("<img>");
                proImage.attr("src",data.imgLink);
                proImage.attr("alt",data.projectName);

                var cardAction = $("<div>");
                cardAction.addClass("card-action center-align col l4");

                var proName = $("<p>");
                proName.addClass("projectName center-align");                
                proName.css('color', getRandomColor());
                proName.text(data.projectName);
                
                var proTech = $("<p>");
                proTech.addClass("center-align proTech");
                proTech.text(data.tech);

                var proLink = $("<a>");
                // proLink.addClass("projectLinks center-align black-text");
                proLink.attr("href" ,data.projectLink);
                proLink.append('<i class="material-icons black-text projectLinks">link</i>');

                var proGitLink = $("<a>");
                proGitLink.attr("href" ,data.gitLink);
                proGitLink.append('<img class = "btnIcon" src="./assets/images/GitHub-Mark-32px.png">');

                var proDesc = $("<p>");
                proDesc.addClass("proDesc");

                proDesc.text(data.description);
                // proLink.text(data.projectName);

                cardImage.append(proImage);
                cardAction.append(proName,proDesc,proTech,proLink,proGitLink);

                var divCard = $("<div>");
                divCard.addClass("card cardProject");
                if (isOdd(i)){
                    divCard.append(cardImage);
                    divCard.append(cardAction);
                }else{
                    divCard.append(cardAction);
                    divCard.append(cardImage);
                }
   

                var divCardCol = $("<div>");
                divCardCol.addClass("col s12 m12 l12 cardx");
                divCardCol.attr("id","id"+i);

               
                divCardCol.append(divCard);

         
                divRow.append(divCardCol);
                

                var divPortfolio = $("#divPortfolio");
                divPortfolio.append(divRow);

            // }
        },function(errorobj){
             // In case of error this will print the error
        console.log("The read failed: " + errorObject.code);
        });
    }      
});
$(document).ready(function(){
   
    // setTimeout(startSVGAnimation($('svg')),3000);

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
    startAnimation();
    // loadProjects();
    
   
//   loadCarousel();
    


$('#carousel1').carousel();
   
    

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

    // Download button pressed to download the resume
    $('#btnDownload').click(function(e) {
        
        e.preventDefault();  //stop the browser from following
        window.location.href = 'assets/uploads/ResumeIndima.pdf';
    });

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    

    // *****************************
function startAnimation(){
    var elements = $('.txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = $(elements[i]).attr('data-rotate');
      var period = $(elements[i]).attr('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    // var css = document.createElement("style");
    // css.type = "text/css";
    // css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    // document.body.appendChild(css);
  };

 //*********************************** */ 

 function loadCarousel(){
    var divCarouselSlide = $("<div>");
    
    // divCarouselSlide.addClass("carousel slide");
    // divCarouselSlide.attr("id","carousel1");
    // divCarouselSlide.data("ride","carousel");

    var divCarouselInner = $("#carouselInner");
    
    var i = 0;
    database.ref("projects/").on("child_added",function(snapshot){
        var data= snapshot.val();
       
        
        var aTag = $("<div>");
        console.log(i);
        if (i == 0){
            aTag.addClass("carousel-item active");
        }
        else{
            aTag.addClass("carousel-item");
        }

        // aTag.attr("href","#one!");
                
        var imgTag = $("<img>").addClass("d-block w-100");
        imgTag.attr("src",data.imgLink);
        

        aTag.append(imgTag);
      
        divCarouselInner.append(aTag);


        i += 1;

    },function(errorobj){
             // In case of error this will print the error
        console.log("The read failed: " + errorObject.code);
    });



    $('.carousel').carousel({
        interval: 2000,
        wrap :true});

 

    
   
 }
    
});
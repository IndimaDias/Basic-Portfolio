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

    // Download button pressed to download the resume
    $('#btnDownload').click(function(e) {
        debugger;
        e.preventDefault();  //stop the browser from following
        window.location.href = '../uploads/Resume-Indima.pdf';
    });

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    function loadProjects (){
        
    }
      
})
$(document).ready(function(){
    $("#hidden").hover(function() {
        $(this).css("color", "white")
    }, function(){
        //$(this).hide() 
        $(this).css("display", "temporary")
    });

    $("#hide").click(function(){
        $("nav ul li a ").hide();
      });
      $("#show").click(function(){
        $("nav ul li a ").show();
      });
    

    
      $( "#logo" ).click(function() {
        $( "#squish" ).animate({
          left: "+=50",
          height: "toggle"
        }, 2000, function() {
          // Animation complete.
        });
      });

      $( "#logo" ).click(function() {
        $( "#squish2" ).animate({
          left: "+=50",
          height: "toggle"
        }, 500, function() {
          // Animation complete.
        });
      });
      $("p").on({
        mouseenter: function(){
            $(this).css("color", "purple");
        }
    });  
    
    setTimeout(function(){
        $('html').fadeOut(1000,  // animation time
            function(){
                // action will do after the animation
                window.location='index.html';  
            }
        );
    }, 3000);

    setTimeout(function(){
        $('html').fadeIn(10000,  // animation time
            function(){
                // action will do after the animation
                window.location='index.html';  
            }
        );
    }, 3000);
  

});
   


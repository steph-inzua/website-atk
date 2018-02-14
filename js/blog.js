$( document ).ready( function(){
    wow = new WOW(
      {
      boxClass:     'wow',     
      offset:       0,         
      mobile:       false,      
      live:         true       
    }
   )
   new WOW().init();

   $(window).bind('scroll',function(e){
      parallaxScroll();
     });

    function parallaxScroll(){
        var scrolled = $(window).scrollTop();

        $('.parallax-lvl-1').css('top',(650-(scrolled*.5))+'px');
        $('.parallax-lvl-2').css('top',(350-(scrolled*.25))+'px');
        $('.parallax-lvl-3').css('top',(300-(scrolled*.25))+'px');
        $('.parallax-lvl-4').css('top',(750-(scrolled*.5))+'px');
    }

});



 
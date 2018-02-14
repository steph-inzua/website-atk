jQuery(function($) {
 
       setTimeout(function() {
          $(".logo").toggleClass('efecto-logo');

          
        },2700);
      
  
    $('#desarrollo').waypoint(function() {

          $('.maqui').toggleClass('anima1');
            
    },
    
{
offset: '50%',
triggerOnce: true
});

  });

if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
  var delta = 0;
  if (event.wheelDelta) delta = event.wheelDelta / 120;
  else if (event.detail) delta = -event.detail / 3;

  handle(delta);
  if (event.preventDefault) event.preventDefault();
  event.returnValue = false;
}

function handle(delta) {
  var time  = 1100;
  var distance  = 672;

  $('html, body').stop().animate({
    scrollTop: $(window).scrollTop() - (distance * delta)
  }, time );
}



setTimeout(function(){
  $('#preload').toggleClass('preload-out');
}, 3100);


 
var dom = document;
var mq = window.matchMedia( "(min-width: 500px)" );

if (mq.matches) {
dom.addEventListener("DOMContentLoaded", documentDOMContentLoaded);

var elementosFijar;

function documentDOMContentLoaded( evt ){
  elementosFijar = dom.querySelectorAll( "[data-fijar]" );
  fijar();

  //window.addEventListener( "scroll", windowScroll );
  window.addEventListener( "resize", windowResize);
  requestAnimationFrame( animacionCuadro );
  //animacionCuadro();
}

function animacionCuadro( timestamp ) {
  corregirPosiciones();
  requestAnimationFrame(animacionCuadro);
}

function fijar(){
  elementosFijar.forEach( elem => {
    elem.style.transform = "none";
    elem.oy = posicionY( elem );
    var c = elem.parentNode;
    //console.debug( c,  elem.oy );
  });
}

function corregirPosiciones(){
  var sy = window.pageYOffset;
  var ay = window.innerHeight;
  
  elementosFijar.forEach( elem => {
    var c = elem.parentNode;
    //console.debug( c,  elem.oy );
    if( esVisible(c) ){
      var ty = elem.clientHeight;
      var dy = ( sy + (( ay - ty ) / 2 )) - elem.oy;
      //console.debug( ty , dy,  elem.oy );
      elem.style.transform = "translateY(" + dy + "px)";
    }
  });
}

function windowResize( evt ){
  fijar();
}

function esVisible( elemento ){
  var sy = window.pageYOffset;
  var area = window.innerHeight;

  var py = 0;
  var ancestro = elemento.offsetParent;
  if( ancestro ){
    do {
      if(!isNaN(ancestro.offsetTop)) {
        py += ancestro.offsetTop;
      }
    } while( ancestro = ancestro.offsetParent )
  }
  
  py += elemento.offsetTop;
  var ms = elemento.offsetHeight * 1;
  if( py > sy - ms && py < sy + area){
    return true;
  }
  else{
    return false;
  }
}

function posicionY( elemento ){
  var py = 0;
  var ancestro = elemento.offsetParent;

    do {
      if(!isNaN(ancestro.offsetTop)) {
        py += ancestro.offsetTop;
      }
    } while( ancestro = ancestro.offsetParent )
  
  py += elemento.offsetTop;
  return py;
}

};






$('.slider-background').slick({
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-img-items',
      dots: false,
      fade: true,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 4000,
});

$('.slider-img-items').slick({
      dots: true,
      arrows: false,
      infinite: true,
      fade: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-background',
      autoplay: true,
      autoplaySpeed: 4000,
      
      
});

$('.carrusel-testim').slick({
      arrows: true,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1
      
});

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
 
var $nav = $('nav');

 
 /// linea - active
$( document ).on( "click", "a.suave", function( evt ) {
    var id = $( this ).attr( "href" );
    scrollTop: $(window).scrollTop() - (distance * delta)
   /* if ( $( id ).length > 0 ) {
        evt.preventDefault();
         
        $(id).addClass("visible");
    }*/
});

$( "a.pop" ).on( "click", function(evt){
    $("#line-time").find(".pop").removeClass("activo");
    $(this).addClass( "activo" );
    
    //console.log( $(this).find(".big") );
});    
 

var lastScrollTop = 0;
var secciones = $(".soluciones-item , #inicio");

$(window).scroll(function(event){
  
      var st = $(this).scrollTop();
  
      if (st < 100){
            $("#btnTop").removeClass('active');
      } else {
            if (st > lastScrollTop){
                  $("#btnTop").removeClass('active');
            } else {
                  $("#btnTop").addClass('active');
            }   
      }
    lastScrollTop = st;


    //agregando
    var anchoViewport = window.innerWidth || document.documentElement.clientWidth;
    var alturaViewport = window.innerHeight || document.documentElement.clientHeight;

    $.each( secciones, function( index, elem ){
        var caja = elem.getBoundingClientRect();
        //console.log( caja );
        if( caja.top >= alturaViewport * -0.5 && caja.top <= alturaViewport * 0.5 ){
            $( ".suave.pop" ).removeClass( "activo" );
            var id = elem.id;
            //console.log( id, caja.top,$( document ).scrollTop() + alturaViewport );
            $( ".suave.pop[href='#" + id + "']" ).addClass( "activo" );
            return;
        }
    });
});

 
 

 

// COHETE
TweenMax.fromTo('.fire', .03, {x: -.5, y: -.4}, {x: .5, y: .4, repeat: -1, yoyo: true});

var tl = new TimelineMax({repeat: -1}),
    tl_sky = new TimelineMax({repeat: -1});
    tl_ = new TimelineMax();

  tl.to()
  .fromTo('.fire', .4, {scaleY: 1}, {scaleY: 1.5}, '+=1.5')
  



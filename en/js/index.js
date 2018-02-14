 

$('.slider-background').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 900,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-img-items',
      cssEase: 'linear',
      lazyLoad: 'ondemand',
      lazyLoadBuffer: 0,
      autoplay: true,
});

$('.slider-img-items').slick({
      dots: true,
      arrows: false,
      infinite: true,
      fade: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-background',
      autoplay: true,
      
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

// fullpage customization
$('#fullpage').fullpage({
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['incio', 'appps', 'plan-de-medios', 'Desarrollo-web', 'Estrategia-creatividad', 'Red-Social', 'Analitica', 'Beacons', 'Testimonio'],
  menu: '#menu',
   

  afterLoad: function(anchorLink, index) {
    
    $nav.css('text-align', 'center');
    
  

    if (index >= 2 && index < 9) {
      $('#fp-nav').show();
      setTimeout(function() {
 
        $('.preload-servicio').addClass('animated bounceOutLeft');
        },1400);

     }

    else{
      $('#fp-nav').hide();
    };

    if(index == 4 ){
      $('.flecha1').addClass('animated bounceOutLeft');
    };

  },

  onLeave: function(index, nextIndex, direction) {    

   if(index == 9) {
      $('#fp-nav').show();

    }
  },



  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      $nav.css('background', 'transparent');
      $(this).css('background', '#374140');
      $(this).find('h2').css('color', 'white');
      $(this).find('h3').css('color', 'white');
      $(this).find('p').css(
        {
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        }
      );
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
    }
  } 

}); 

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4kKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHN0ID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAkKFwiI2hlYWRlclwiKS5jc3Moe1xyXG4gICAgXCJiYWNrZ3JvdW5kLXBvc2l0aW9uLXlcIjogKC1zdC8yMClcclxuICB9KVxyXG4gICQoXCIjaGVhZGVyY1wiKS5jc3Moe1xyXG4gICAgXCJ0b3BcIjogKC1zdC81KSxcclxuICAgIFwiYm90dG9tXCI6IChzdC81KVxyXG4gIH0pXHJcbn0pOyovXHJcblxyXG4kKCcuc2xpZGVyLWJhY2tncm91bmQnKS5zbGljayh7XHJcbiAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgYXNOYXZGb3I6ICcuc2xpZGVyLWltZy1pdGVtcycsXHJcbiAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcclxuICAgICAgbGF6eUxvYWRCdWZmZXI6IDAsXHJcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG59KTtcclxuXHJcbiQoJy5zbGlkZXItaW1nLWl0ZW1zJykuc2xpY2soe1xyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgYXNOYXZGb3I6ICcuc2xpZGVyLWJhY2tncm91bmQnLFxyXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgXHJcbn0pO1xyXG4kKCcuY2FycnVzZWwtdGVzdGltJykuc2xpY2soe1xyXG4gICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICBzcGVlZDogOTAwLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgIFxyXG59KTtcclxuXHJcbiQoXCIuaG92ZXJcIikubW91c2VsZWF2ZShcclxuICBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaG92ZXJcIik7XHJcbiAgfVxyXG4pO1xyXG4gXHJcbnZhciAkbmF2ID0gJCgnbmF2Jyk7XHJcblxyXG4vLyBmdWxscGFnZSBjdXN0b21pemF0aW9uXHJcbiQoJyNmdWxscGFnZScpLmZ1bGxwYWdlKHtcclxuICBzZWN0aW9uU2VsZWN0b3I6ICcudmVydGljYWwtc2Nyb2xsaW5nJyxcclxuICBzbGlkZVNlbGVjdG9yOiAnLmhvcml6b250YWwtc2Nyb2xsaW5nJyxcclxuICBuYXZpZ2F0aW9uOiB0cnVlLFxyXG4gIHNsaWRlc05hdmlnYXRpb246IHRydWUsXHJcbiAgY29udHJvbEFycm93czogZmFsc2UsXHJcbiAgYW5jaG9yczogWydpbmNpbycsICdhcHBwcycsICdwbGFuLWRlLW1lZGlvcycsICdEZXNhcnJvbGxvLXdlYicsICdFc3RyYXRlZ2lhLWNyZWF0aXZpZGFkJywgJ1JlZC1Tb2NpYWwnLCAnQW5hbGl0aWNhJywgJ0JlYWNvbnMnLCAnVGVzdGltb25pbyddLFxyXG4gIG1lbnU6ICcjbWVudScsXHJcbiAgIFxyXG5cclxuICBhZnRlckxvYWQ6IGZ1bmN0aW9uKGFuY2hvckxpbmssIGluZGV4KSB7XHJcbiAgICBcclxuICAgICRuYXYuY3NzKCd0ZXh0LWFsaWduJywgJ2NlbnRlcicpO1xyXG4gICAgXHJcbiAgXHJcblxyXG4gICAgaWYgKGluZGV4ID49IDIgJiYgaW5kZXggPCA5KSB7XHJcbiAgICAgICQoJyNmcC1uYXYnKS5zaG93KCk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiBcclxuICAgICAgICAkKCcucHJlbG9hZC1zZXJ2aWNpbycpLmFkZENsYXNzKCdhbmltYXRlZCBib3VuY2VPdXRMZWZ0Jyk7XHJcbiAgICAgICAgfSwxNDAwKTtcclxuXHJcbiAgICAgfVxyXG5cclxuICAgIGVsc2V7XHJcbiAgICAgICQoJyNmcC1uYXYnKS5oaWRlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKGluZGV4ID09IDQgKXtcclxuICAgICAgJCgnLmZsZWNoYTEnKS5hZGRDbGFzcygnYW5pbWF0ZWQgYm91bmNlT3V0TGVmdCcpO1xyXG4gICAgfTtcclxuXHJcbiAgfSxcclxuXHJcbiAgb25MZWF2ZTogZnVuY3Rpb24oaW5kZXgsIG5leHRJbmRleCwgZGlyZWN0aW9uKSB7ICAgIFxyXG5cclxuICAgaWYoaW5kZXggPT0gOSkge1xyXG4gICAgICAkKCcjZnAtbmF2Jykuc2hvdygpO1xyXG5cclxuICAgIH1cclxuICB9LFxyXG5cclxuXHJcblxyXG4gIGFmdGVyU2xpZGVMb2FkOiBmdW5jdGlvbiggYW5jaG9yTGluaywgaW5kZXgsIHNsaWRlQW5jaG9yLCBzbGlkZUluZGV4KSB7XHJcbiAgICBpZihhbmNob3JMaW5rID09ICdmaWZ0aFNlY3Rpb24nICYmIHNsaWRlSW5kZXggPT0gMSkge1xyXG4gICAgICAkLmZuLmZ1bGxwYWdlLnNldEFsbG93U2Nyb2xsaW5nKGZhbHNlLCAndXAnKTtcclxuICAgICAgJG5hdi5jc3MoJ2JhY2tncm91bmQnLCAndHJhbnNwYXJlbnQnKTtcclxuICAgICAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQnLCAnIzM3NDE0MCcpO1xyXG4gICAgICAkKHRoaXMpLmZpbmQoJ2gyJykuY3NzKCdjb2xvcicsICd3aGl0ZScpO1xyXG4gICAgICAkKHRoaXMpLmZpbmQoJ2gzJykuY3NzKCdjb2xvcicsICd3aGl0ZScpO1xyXG4gICAgICAkKHRoaXMpLmZpbmQoJ3AnKS5jc3MoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJ2NvbG9yJzogJyNEQzM1MjInLFxyXG4gICAgICAgICAgJ29wYWNpdHknOiAxLFxyXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKDApJ1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvblNsaWRlTGVhdmU6IGZ1bmN0aW9uKCBhbmNob3JMaW5rLCBpbmRleCwgc2xpZGVJbmRleCwgZGlyZWN0aW9uKSB7XHJcbiAgICBpZihhbmNob3JMaW5rID09ICdmaWZ0aFNlY3Rpb24nICYmIHNsaWRlSW5kZXggPT0gMSkge1xyXG4gICAgICAkLmZuLmZ1bGxwYWdlLnNldEFsbG93U2Nyb2xsaW5nKHRydWUsICd1cCcpO1xyXG4gICAgICAkbmF2LmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDAsIDQ3LCA3NywgLjI1KScpO1xyXG4gICAgfVxyXG4gIH0gXHJcblxyXG59KTsgXHJcbiJdLCJmaWxlIjoiaW5kZXguanMifQ==

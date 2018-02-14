jQuery(function($) {
    $('.lapto').waypoint(function() {
    //$(this).toggleClass( 'bounceIn animated' );
        setTimeout(function() {
          $(".lapto").fadeOut(400);
        },6000);
        setTimeout(function() {
            $(".mobile").fadeIn(700);
        },6200);

        // agregar animated
        $('.pag2').addClass('animated fadeInRight');
        $('.pag3').addClass('animated fadeInLeft');
        $('.pag4').addClass('animated fadeInRight');
        $('.pag5').addClass('animated fadeInLeft');
        

        var interleaveOffset = -.5;
        var interleaveEffect = {
          onProgress: function(swiper, progress){
            for (var i = 0; i < swiper.slides.length; i++){
              var slide = swiper.slides[i];
              var translate, innerTranslate;
              progress = slide.progress;
              if (progress > 0) {
                translate = progress * swiper.width;
                innerTranslate = translate * interleaveOffset;        
              }
              else {        
                innerTranslate = Math.abs( progress * swiper.width ) * interleaveOffset;
                translate = 0;
              }
                        if (i == 0) {
                            console.log(progress + ' <- progress');
                        }
              $(slide).css({
                transform: 'translate3d(' + translate + 'px,0,0)'
              });
              $(slide).find('.slide-inner').css({
                transform: 'translate3d(' + innerTranslate + 'px,0,0)'
              });
            }
          },
          onTouchStart: function(swiper){
            for (var i = 0; i < swiper.slides.length; i++){
              $(swiper.slides[i]).css({ transition: '' });
            }
          },
          onSetTransition: function(swiper, speed) {
            for (var i = 0; i < swiper.slides.length; i++){
              $(swiper.slides[i])
                .find('.slide-inner')
                .andSelf()
                .css({ transition: speed + 'ms' });
            }
          }
        };

        var swiperOptions = {
          loop: true,
          speed: 1050,
          grabCursor: true,
          watchSlidesProgress: true,
          mousewheelControl: true,
          keyboardControl: true,
          autoplay: true
        };
        swiperOptions = $.extend(swiperOptions, interleaveEffect);
        var swiper = new Swiper('.swiper-container', swiperOptions);
  },
  {
    offset: '70%',
    triggerOnce: true
  });
});

// tiempos para aparecer
/*setTimeout(function() {
  $(".lapto").fadeOut(400);
},9800);
setTimeout(function() {
    $(".mobile").fadeIn(700);
},10150);*/


/* SLIDER */


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkZXQtcHJveWVjdG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGZ1bmN0aW9uKCQpIHtcclxuICAgICQoJy5sYXB0bycpLndheXBvaW50KGZ1bmN0aW9uKCkge1xyXG4gICAgLy8kKHRoaXMpLnRvZ2dsZUNsYXNzKCAnYm91bmNlSW4gYW5pbWF0ZWQnICk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICQoXCIubGFwdG9cIikuZmFkZU91dCg0MDApO1xyXG4gICAgICAgIH0sNjAwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJChcIi5tb2JpbGVcIikuZmFkZUluKDcwMCk7XHJcbiAgICAgICAgfSw2MjAwKTtcclxuXHJcbiAgICAgICAgLy8gYWdyZWdhciBhbmltYXRlZFxyXG4gICAgICAgICQoJy5wYWcyJykuYWRkQ2xhc3MoJ2FuaW1hdGVkIGZhZGVJblJpZ2h0Jyk7XHJcbiAgICAgICAgJCgnLnBhZzMnKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZUluTGVmdCcpO1xyXG4gICAgICAgICQoJy5wYWc0JykuYWRkQ2xhc3MoJ2FuaW1hdGVkIGZhZGVJblJpZ2h0Jyk7XHJcbiAgICAgICAgJCgnLnBhZzUnKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZUluTGVmdCcpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB2YXIgaW50ZXJsZWF2ZU9mZnNldCA9IC0uNTtcclxuICAgICAgICB2YXIgaW50ZXJsZWF2ZUVmZmVjdCA9IHtcclxuICAgICAgICAgIG9uUHJvZ3Jlc3M6IGZ1bmN0aW9uKHN3aXBlciwgcHJvZ3Jlc3Mpe1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgIHZhciBzbGlkZSA9IHN3aXBlci5zbGlkZXNbaV07XHJcbiAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZSwgaW5uZXJUcmFuc2xhdGU7XHJcbiAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBzbGlkZS5wcm9ncmVzcztcclxuICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUgPSBwcm9ncmVzcyAqIHN3aXBlci53aWR0aDtcclxuICAgICAgICAgICAgICAgIGlubmVyVHJhbnNsYXRlID0gdHJhbnNsYXRlICogaW50ZXJsZWF2ZU9mZnNldDsgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNlIHsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW5uZXJUcmFuc2xhdGUgPSBNYXRoLmFicyggcHJvZ3Jlc3MgKiBzd2lwZXIud2lkdGggKSAqIGludGVybGVhdmVPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUgPSAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZ3Jlc3MgKyAnIDwtIHByb2dyZXNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkKHNsaWRlKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoJyArIHRyYW5zbGF0ZSArICdweCwwLDApJ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICQoc2xpZGUpLmZpbmQoJy5zbGlkZS1pbm5lcicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgnICsgaW5uZXJUcmFuc2xhdGUgKyAncHgsMCwwKSdcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24oc3dpcGVyKXtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAkKHN3aXBlci5zbGlkZXNbaV0pLmNzcyh7IHRyYW5zaXRpb246ICcnIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgb25TZXRUcmFuc2l0aW9uOiBmdW5jdGlvbihzd2lwZXIsIHNwZWVkKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgJChzd2lwZXIuc2xpZGVzW2ldKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5zbGlkZS1pbm5lcicpXHJcbiAgICAgICAgICAgICAgICAuYW5kU2VsZigpXHJcbiAgICAgICAgICAgICAgICAuY3NzKHsgdHJhbnNpdGlvbjogc3BlZWQgKyAnbXMnIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHN3aXBlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgc3BlZWQ6IDEwNTAsXHJcbiAgICAgICAgICBncmFiQ3Vyc29yOiB0cnVlLFxyXG4gICAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcclxuICAgICAgICAgIG1vdXNld2hlZWxDb250cm9sOiB0cnVlLFxyXG4gICAgICAgICAga2V5Ym9hcmRDb250cm9sOiB0cnVlLFxyXG4gICAgICAgICAgYXV0b3BsYXk6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN3aXBlck9wdGlvbnMgPSAkLmV4dGVuZChzd2lwZXJPcHRpb25zLCBpbnRlcmxlYXZlRWZmZWN0KTtcclxuICAgICAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCBzd2lwZXJPcHRpb25zKTtcclxuICB9LFxyXG4gIHtcclxuICAgIG9mZnNldDogJzcwJScsXHJcbiAgICB0cmlnZ2VyT25jZTogdHJ1ZVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8vIHRpZW1wb3MgcGFyYSBhcGFyZWNlclxyXG4vKnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgJChcIi5sYXB0b1wiKS5mYWRlT3V0KDQwMCk7XHJcbn0sOTgwMCk7XHJcbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLm1vYmlsZVwiKS5mYWRlSW4oNzAwKTtcclxufSwxMDE1MCk7Ki9cclxuXHJcblxyXG4vKiBTTElERVIgKi9cclxuXHJcbiJdLCJmaWxlIjoiZGV0LXByb3llY3RvLmpzIn0=

$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e){
  e.preventDefault();

    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
  
})
    
$(document).scroll(function() {
    if( $(this).scrollTop() > 140 ) {
        $(".categorias").addClass("estatico");
        

    } else if( $(this).scrollTop() < 140 ) {
        $(".categorias").removeClass("estatico");
        
    };
    
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
  var distance  = 670;

  $('html, body').stop().animate({
    scrollTop: $(window).scrollTop() - (distance * delta)
  }, time );
}


$(".item-proyect a ").mouseover(function(event){
   $(".picture").addClass("effect1");
   $("h4").addClass("letra1");
   $("p").addClass("letra1");
   $(".categorias a").addClass("letra1");
   $(".logo-proyecto").addClass("opacity0");
   $("figcaption h4").addClass("opacity0");
   $("figcaption p").addClass("opacity0");
   $("figcaption .btn3").addClass("opacity0");
   $("figcaption").addClass("anima-lineas");

});
$(".item-proyect a").mouseout(function(event){
  $(".picture").removeClass("effect1");
  $("h4").removeClass("letra1");
  $("p").removeClass("letra1");
  $(".categorias a").removeClass("letra1");
  $(".logo-proyecto").removeClass("opacity0");
  $("figcaption h4").removeClass("opacity0");
  $("figcaption p").removeClass("opacity0");
  $("figcaption .btn3").removeClass("opacity0");

});


$('#parallax').parallax({
  invertX: true,
  invertY: true,
  scalarX: 10,
   frictionY: .1
});



particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 220, // cantidad de lineas
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fd8e00"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.8,
        "sync": false
      }
    },
    "size": {
      "value": 3, //tamaño de circulos
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#9f9f9f",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 340,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 6,
        "speed": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.3
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


particlesJS("particles2-js", {
  "particles": {
    "number": {
      "value": 220, // cantidad de lineas
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fd8e00"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.8,
        "sync": false
      }
    },
    "size": {
      "value": 3, //tamaño de circulos
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#9f9f9f",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 340,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 6,
        "speed": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.3
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});



// COHETE
//TweenMax.fromTo('.aaa', .4, {x: 0, y: .4}, {x: 10, y: .10, repeat: -1, yoyo: true});
TweenMax.fromTo('.fire', .03, {x: -.5, y: -.6}, {x: .5, y: .4, repeat: -1, yoyo: true});

var tl = new TimelineMax({repeat: -1}),
    tl_ = new TimelineMax();

tl.to('.cohete', 4, {transform: 'translateY(-5vh)', ease: Expo.easeOut}) 
  .fromTo('.fire', .4, {scaleY: 1}, {scaleY: 1.5}, '+=1.5') 
  .to('.cohete', 2, {transform: 'translateY(-130vh)', ease: Power3.easeOut}, '+=2.5'); 
  
 

/*function myFunction() {
    location.hash = "app";
    var x = "The anchor part is now: " + location.hash;
    document.getElementById("demo").innerHTML = x;
}*/
/*$(function(){
    $("#clickme").click(function(){
        var p=window.location.hash;
        alert(p)
    });
});*/


/*var actual = window.location.hash;
var destino = this.hash;
console.debug( actual, destino );
if (actual == destino) {
  evt.preventDefault();
  window.location = "#";
  
  $(window).scrollTop( y );

}*/

  
/*if (location.href.indexOf("#apps") != 1) {
  $(".bg-all1").addClass("prueba");         
}*/


$(function() {
    if (location.hash === "#app") {
        document.getElementById("tab-nav-3").checked = true;
    }
    if (location.hash === "#medios") {
        document.getElementById("tab-nav-6").checked = true;
    }
    if (location.hash === "#estrategia-creatividad") {
        document.getElementById("tab-nav-1").checked = true;
    }
    if (location.hash === "#redes-sociales") {
        document.getElementById("tab-nav-4").checked = true;
    }
  /*  if (location.hash === "#analitica") {
        document.getElementById("tab-nav-1").checked = true;
    }*/
    if (location.hash === "#desarrollo") {
        document.getElementById("tab-nav-2").checked = true;
    }
    if (location.hash === "#beacons") {
        document.getElementById("tab-nav-5").checked = true;
    }
});


 $(function() {
  $('input').on('change', function() {
    var input = $(this);
    if (input.val().length) {
      input.addClass('top-placeh');
    } else {
      input.removeClass('top-placeh');
    }
  });
  $('textarea').on('change', function() {
    var textarea = $(this);
    if (textarea.val().length) {
      textarea.addClass('top-placeh');
    } else {
      textarea.removeClass('top-placeh');
    }
  });
  
 /* setTimeout(function() {
    $('#fname').trigger('focus');
  }, 500);*/
}); 
 
$('#myanchor').click(function(){
    window.location.hash = "myanchor"; //set hash
    return false; //disables browser anchor jump behavior
});
$(window).bind('hashchange', function () { //detect hash change
    var hash = window.location.hash.slice(1); //hash to string (= "myanchor")
    //do sth here, hell yeah!
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


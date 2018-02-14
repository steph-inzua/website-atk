$(window).bind('scroll',function(e){
      parallaxScroll();
     });

  function parallaxScroll(){
      var scrolled = $(window).scrollTop();

      $('.img-p').css('top',(10-(scrolled*.15))+'px');
      $('.b-text').css('top',(30-(scrolled*.10))+'px');
      
  }


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
      // "value": "#fd8e00"
      "value": "#FFF"
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
      // "color": "#9f9f9f",
      "color": "#FFF",
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
      "value": "#FFF"
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
      // "color": "#9f9f9f",
      "color": "#FFF",
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJxdWllbmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuJCgnI3BhcmFsbGF4JykucGFyYWxsYXgoe1xyXG4gIGludmVydFg6IHRydWUsXHJcbiAgaW52ZXJ0WTogdHJ1ZSxcclxuICBzY2FsYXJYOiAxMCxcclxuICAgZnJpY3Rpb25ZOiAuMVxyXG59KTtcclxuXHJcblxyXG5cclxucGFydGljbGVzSlMoXCJwYXJ0aWNsZXMtanNcIiwge1xyXG4gIFwicGFydGljbGVzXCI6IHtcclxuICAgIFwibnVtYmVyXCI6IHtcclxuICAgICAgXCJ2YWx1ZVwiOiAyMjAsIC8vIGNhbnRpZGFkIGRlIGxpbmVhc1xyXG4gICAgICBcImRlbnNpdHlcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgXCJ2YWx1ZV9hcmVhXCI6IDgwMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJjb2xvclwiOiB7XHJcbiAgICAgIFwidmFsdWVcIjogXCIjZmQ4ZTAwXCJcclxuICAgIH0sXHJcbiAgICBcInNoYXBlXCI6IHtcclxuICAgICAgXCJ0eXBlXCI6IFwiY2lyY2xlXCIsXHJcbiAgICAgIFwic3Ryb2tlXCI6IHtcclxuICAgICAgICBcIndpZHRoXCI6IDAsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIlxyXG4gICAgICB9LFxyXG4gICAgICBcInBvbHlnb25cIjoge1xyXG4gICAgICAgIFwibmJfc2lkZXNcIjogNVxyXG4gICAgICB9LFxyXG4gICAgICBcImltYWdlXCI6IHtcclxuICAgICAgICBcInNyY1wiOiBcImltZy9naXRodWIuc3ZnXCIsXHJcbiAgICAgICAgXCJ3aWR0aFwiOiAxMDAsXHJcbiAgICAgICAgXCJoZWlnaHRcIjogMTAwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIm9wYWNpdHlcIjoge1xyXG4gICAgICBcInZhbHVlXCI6IDAuNSxcclxuICAgICAgXCJyYW5kb21cIjogZmFsc2UsXHJcbiAgICAgIFwiYW5pbVwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJzcGVlZFwiOiAxLFxyXG4gICAgICAgIFwib3BhY2l0eV9taW5cIjogMC44LFxyXG4gICAgICAgIFwic3luY1wiOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJzaXplXCI6IHtcclxuICAgICAgXCJ2YWx1ZVwiOiAzLCAvL3RhbWHDsW8gZGUgY2lyY3Vsb3NcclxuICAgICAgXCJyYW5kb21cIjogdHJ1ZSxcclxuICAgICAgXCJhbmltXCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcInNwZWVkXCI6IDEwLFxyXG4gICAgICAgIFwic2l6ZV9taW5cIjogMC4zLFxyXG4gICAgICAgIFwic3luY1wiOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJsaW5lX2xpbmtlZFwiOiB7XHJcbiAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgIFwiZGlzdGFuY2VcIjogMTAwLFxyXG4gICAgICBcImNvbG9yXCI6IFwiIzlmOWY5ZlwiLFxyXG4gICAgICBcIm9wYWNpdHlcIjogMC40LFxyXG4gICAgICBcIndpZHRoXCI6IDFcclxuICAgIH0sXHJcbiAgICBcIm1vdmVcIjoge1xyXG4gICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICBcInNwZWVkXCI6IDEsXHJcbiAgICAgIFwiZGlyZWN0aW9uXCI6IFwibm9uZVwiLFxyXG4gICAgICBcInJhbmRvbVwiOiBmYWxzZSxcclxuICAgICAgXCJzdHJhaWdodFwiOiBmYWxzZSxcclxuICAgICAgXCJvdXRfbW9kZVwiOiBcIm91dFwiLFxyXG4gICAgICBcImJvdW5jZVwiOiBmYWxzZSxcclxuICAgICAgXCJhdHRyYWN0XCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcInJvdGF0ZVhcIjogNjAwLFxyXG4gICAgICAgIFwicm90YXRlWVwiOiAxMjAwXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIFwiaW50ZXJhY3Rpdml0eVwiOiB7XHJcbiAgICBcImRldGVjdF9vblwiOiBcImNhbnZhc1wiLFxyXG4gICAgXCJldmVudHNcIjoge1xyXG4gICAgICBcIm9uaG92ZXJcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwibW9kZVwiOiBcImdyYWJcIlxyXG4gICAgICB9LFxyXG4gICAgICBcIm9uY2xpY2tcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgXCJtb2RlXCI6IFwicHVzaFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwicmVzaXplXCI6IHRydWVcclxuICAgIH0sXHJcbiAgICBcIm1vZGVzXCI6IHtcclxuICAgICAgXCJncmFiXCI6IHtcclxuICAgICAgICBcImRpc3RhbmNlXCI6IDM0MCxcclxuICAgICAgICBcImxpbmVfbGlua2VkXCI6IHtcclxuICAgICAgICAgIFwib3BhY2l0eVwiOiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBcImJ1YmJsZVwiOiB7XHJcbiAgICAgICAgXCJkaXN0YW5jZVwiOiA0MDAsXHJcbiAgICAgICAgXCJzaXplXCI6IDQwLFxyXG4gICAgICAgIFwiZHVyYXRpb25cIjogMixcclxuICAgICAgICBcIm9wYWNpdHlcIjogNixcclxuICAgICAgICBcInNwZWVkXCI6IDJcclxuICAgICAgfSxcclxuICAgICAgXCJyZXB1bHNlXCI6IHtcclxuICAgICAgICBcImRpc3RhbmNlXCI6IDIwMCxcclxuICAgICAgICBcImR1cmF0aW9uXCI6IDAuM1xyXG4gICAgICB9LFxyXG4gICAgICBcInB1c2hcIjoge1xyXG4gICAgICAgIFwicGFydGljbGVzX25iXCI6IDRcclxuICAgICAgfSxcclxuICAgICAgXCJyZW1vdmVcIjoge1xyXG4gICAgICAgIFwicGFydGljbGVzX25iXCI6IDJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgXCJyZXRpbmFfZGV0ZWN0XCI6IHRydWVcclxufSk7XHJcblxyXG5cclxucGFydGljbGVzSlMoXCJwYXJ0aWNsZXMyLWpzXCIsIHtcclxuICBcInBhcnRpY2xlc1wiOiB7XHJcbiAgICBcIm51bWJlclwiOiB7XHJcbiAgICAgIFwidmFsdWVcIjogMjIwLCAvLyBjYW50aWRhZCBkZSBsaW5lYXNcclxuICAgICAgXCJkZW5zaXR5XCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgIFwidmFsdWVfYXJlYVwiOiA4MDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiY29sb3JcIjoge1xyXG4gICAgICBcInZhbHVlXCI6IFwiI2ZkOGUwMFwiXHJcbiAgICB9LFxyXG4gICAgXCJzaGFwZVwiOiB7XHJcbiAgICAgIFwidHlwZVwiOiBcImNpcmNsZVwiLFxyXG4gICAgICBcInN0cm9rZVwiOiB7XHJcbiAgICAgICAgXCJ3aWR0aFwiOiAwLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcclxuICAgICAgfSxcclxuICAgICAgXCJwb2x5Z29uXCI6IHtcclxuICAgICAgICBcIm5iX3NpZGVzXCI6IDVcclxuICAgICAgfSxcclxuICAgICAgXCJpbWFnZVwiOiB7XHJcbiAgICAgICAgXCJzcmNcIjogXCJpbWcvZ2l0aHViLnN2Z1wiLFxyXG4gICAgICAgIFwid2lkdGhcIjogMTAwLFxyXG4gICAgICAgIFwiaGVpZ2h0XCI6IDEwMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJvcGFjaXR5XCI6IHtcclxuICAgICAgXCJ2YWx1ZVwiOiAwLjUsXHJcbiAgICAgIFwicmFuZG9tXCI6IGZhbHNlLFxyXG4gICAgICBcImFuaW1cIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwic3BlZWRcIjogMSxcclxuICAgICAgICBcIm9wYWNpdHlfbWluXCI6IDAuOCxcclxuICAgICAgICBcInN5bmNcIjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwic2l6ZVwiOiB7XHJcbiAgICAgIFwidmFsdWVcIjogMywgLy90YW1hw7FvIGRlIGNpcmN1bG9zXHJcbiAgICAgIFwicmFuZG9tXCI6IHRydWUsXHJcbiAgICAgIFwiYW5pbVwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJzcGVlZFwiOiAxMCxcclxuICAgICAgICBcInNpemVfbWluXCI6IDAuMyxcclxuICAgICAgICBcInN5bmNcIjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwibGluZV9saW5rZWRcIjoge1xyXG4gICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICBcImRpc3RhbmNlXCI6IDEwMCxcclxuICAgICAgXCJjb2xvclwiOiBcIiM5ZjlmOWZcIixcclxuICAgICAgXCJvcGFjaXR5XCI6IDAuNCxcclxuICAgICAgXCJ3aWR0aFwiOiAxXHJcbiAgICB9LFxyXG4gICAgXCJtb3ZlXCI6IHtcclxuICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgICAgXCJzcGVlZFwiOiAxLFxyXG4gICAgICBcImRpcmVjdGlvblwiOiBcIm5vbmVcIixcclxuICAgICAgXCJyYW5kb21cIjogZmFsc2UsXHJcbiAgICAgIFwic3RyYWlnaHRcIjogZmFsc2UsXHJcbiAgICAgIFwib3V0X21vZGVcIjogXCJvdXRcIixcclxuICAgICAgXCJib3VuY2VcIjogZmFsc2UsXHJcbiAgICAgIFwiYXR0cmFjdFwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJyb3RhdGVYXCI6IDYwMCxcclxuICAgICAgICBcInJvdGF0ZVlcIjogMTIwMFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBcImludGVyYWN0aXZpdHlcIjoge1xyXG4gICAgXCJkZXRlY3Rfb25cIjogXCJjYW52YXNcIixcclxuICAgIFwiZXZlbnRzXCI6IHtcclxuICAgICAgXCJvbmhvdmVyXCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcIm1vZGVcIjogXCJncmFiXCJcclxuICAgICAgfSxcclxuICAgICAgXCJvbmNsaWNrXCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgIFwibW9kZVwiOiBcInB1c2hcIlxyXG4gICAgICB9LFxyXG4gICAgICBcInJlc2l6ZVwiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgXCJtb2Rlc1wiOiB7XHJcbiAgICAgIFwiZ3JhYlwiOiB7XHJcbiAgICAgICAgXCJkaXN0YW5jZVwiOiAzNDAsXHJcbiAgICAgICAgXCJsaW5lX2xpbmtlZFwiOiB7XHJcbiAgICAgICAgICBcIm9wYWNpdHlcIjogMVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgXCJidWJibGVcIjoge1xyXG4gICAgICAgIFwiZGlzdGFuY2VcIjogNDAwLFxyXG4gICAgICAgIFwic2l6ZVwiOiA0MCxcclxuICAgICAgICBcImR1cmF0aW9uXCI6IDIsXHJcbiAgICAgICAgXCJvcGFjaXR5XCI6IDYsXHJcbiAgICAgICAgXCJzcGVlZFwiOiAyXHJcbiAgICAgIH0sXHJcbiAgICAgIFwicmVwdWxzZVwiOiB7XHJcbiAgICAgICAgXCJkaXN0YW5jZVwiOiAyMDAsXHJcbiAgICAgICAgXCJkdXJhdGlvblwiOiAwLjNcclxuICAgICAgfSxcclxuICAgICAgXCJwdXNoXCI6IHtcclxuICAgICAgICBcInBhcnRpY2xlc19uYlwiOiA0XHJcbiAgICAgIH0sXHJcbiAgICAgIFwicmVtb3ZlXCI6IHtcclxuICAgICAgICBcInBhcnRpY2xlc19uYlwiOiAyXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIFwicmV0aW5hX2RldGVjdFwiOiB0cnVlXHJcbn0pOyJdLCJmaWxlIjoicXVpZW5lcy5qcyJ9

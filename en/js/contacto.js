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

function initialize()
      {
        var latlng = new google.maps.LatLng(-12.111473, -77.049788);
        var settings = {
          zoom: 17,
          center: latlng,
          mapTypeControl: true,
          mapTypeControlOptions:
          {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
          },
          navigationControl: false,
          navigationControlOptions:
          {
            style: google.maps.NavigationControlStyle.SMALL
          },
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
     
        var companyLogo = new google.maps.MarkerImage('img/icons/ico-map-atk.png', new google.maps.Size(59, 62), new google.maps.Point(0, 0), new google.maps.Point(20, 70));
        var companyShadow = new google.maps.MarkerImage('img/icons/ico-map-atk.png', new google.maps.Size(130, 50), new google.maps.Point(0, 0), new google.maps.Point(65, 50));
        var companyPos = new google.maps.LatLng(-12.111473, -77.049788);
        var companyMarker = new google.maps.Marker(
        {
          position: companyPos,
          map: map,
          icon: companyLogo,
          shadow: companyShadow,
          title: "ATK"
        });
      };

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


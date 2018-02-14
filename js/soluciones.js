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
      "distance": 150,
      "color": "#9f9f9f",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
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
        "enable": true,
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
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzb2x1Y2lvbmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoJyNwYXJhbGxheCcpLnBhcmFsbGF4KHtcclxuICBpbnZlcnRYOiB0cnVlLFxyXG4gIGludmVydFk6IHRydWUsXHJcbiAgc2NhbGFyWDogMTAsXHJcbiAgIGZyaWN0aW9uWTogLjFcclxufSk7XHJcblxyXG5cclxuXHJcbnBhcnRpY2xlc0pTKFwicGFydGljbGVzLWpzXCIsIHtcclxuICBcInBhcnRpY2xlc1wiOiB7XHJcbiAgICBcIm51bWJlclwiOiB7XHJcbiAgICAgIFwidmFsdWVcIjogMjIwLCAvLyBjYW50aWRhZCBkZSBsaW5lYXNcclxuICAgICAgXCJkZW5zaXR5XCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgIFwidmFsdWVfYXJlYVwiOiA4MDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiY29sb3JcIjoge1xyXG4gICAgICBcInZhbHVlXCI6IFwiI2ZkOGUwMFwiXHJcbiAgICB9LFxyXG4gICAgXCJzaGFwZVwiOiB7XHJcbiAgICAgIFwidHlwZVwiOiBcImNpcmNsZVwiLFxyXG4gICAgICBcInN0cm9rZVwiOiB7XHJcbiAgICAgICAgXCJ3aWR0aFwiOiAwLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcclxuICAgICAgfSxcclxuICAgICAgXCJwb2x5Z29uXCI6IHtcclxuICAgICAgICBcIm5iX3NpZGVzXCI6IDVcclxuICAgICAgfSxcclxuICAgICAgXCJpbWFnZVwiOiB7XHJcbiAgICAgICAgXCJzcmNcIjogXCJpbWcvZ2l0aHViLnN2Z1wiLFxyXG4gICAgICAgIFwid2lkdGhcIjogMTAwLFxyXG4gICAgICAgIFwiaGVpZ2h0XCI6IDEwMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJvcGFjaXR5XCI6IHtcclxuICAgICAgXCJ2YWx1ZVwiOiAwLjUsXHJcbiAgICAgIFwicmFuZG9tXCI6IGZhbHNlLFxyXG4gICAgICBcImFuaW1cIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwic3BlZWRcIjogMSxcclxuICAgICAgICBcIm9wYWNpdHlfbWluXCI6IDAuOCxcclxuICAgICAgICBcInN5bmNcIjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwic2l6ZVwiOiB7XHJcbiAgICAgIFwidmFsdWVcIjogMywgLy90YW1hw7FvIGRlIGNpcmN1bG9zXHJcbiAgICAgIFwicmFuZG9tXCI6IHRydWUsXHJcbiAgICAgIFwiYW5pbVwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJzcGVlZFwiOiAxMCxcclxuICAgICAgICBcInNpemVfbWluXCI6IDAuMyxcclxuICAgICAgICBcInN5bmNcIjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwibGluZV9saW5rZWRcIjoge1xyXG4gICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICBcImRpc3RhbmNlXCI6IDE1MCxcclxuICAgICAgXCJjb2xvclwiOiBcIiM5ZjlmOWZcIixcclxuICAgICAgXCJvcGFjaXR5XCI6IDAuNCxcclxuICAgICAgXCJ3aWR0aFwiOiAxXHJcbiAgICB9LFxyXG4gICAgXCJtb3ZlXCI6IHtcclxuICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgICAgXCJzcGVlZFwiOiAyLFxyXG4gICAgICBcImRpcmVjdGlvblwiOiBcIm5vbmVcIixcclxuICAgICAgXCJyYW5kb21cIjogZmFsc2UsXHJcbiAgICAgIFwic3RyYWlnaHRcIjogZmFsc2UsXHJcbiAgICAgIFwib3V0X21vZGVcIjogXCJvdXRcIixcclxuICAgICAgXCJib3VuY2VcIjogZmFsc2UsXHJcbiAgICAgIFwiYXR0cmFjdFwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJyb3RhdGVYXCI6IDYwMCxcclxuICAgICAgICBcInJvdGF0ZVlcIjogMTIwMFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBcImludGVyYWN0aXZpdHlcIjoge1xyXG4gICAgXCJkZXRlY3Rfb25cIjogXCJjYW52YXNcIixcclxuICAgIFwiZXZlbnRzXCI6IHtcclxuICAgICAgXCJvbmhvdmVyXCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgIFwibW9kZVwiOiBcImdyYWJcIlxyXG4gICAgICB9LFxyXG4gICAgICBcIm9uY2xpY2tcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgXCJtb2RlXCI6IFwicHVzaFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwicmVzaXplXCI6IHRydWVcclxuICAgIH0sXHJcbiAgICBcIm1vZGVzXCI6IHtcclxuICAgICAgXCJncmFiXCI6IHtcclxuICAgICAgICBcImRpc3RhbmNlXCI6IDM0MCxcclxuICAgICAgICBcImxpbmVfbGlua2VkXCI6IHtcclxuICAgICAgICAgIFwib3BhY2l0eVwiOiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBcImJ1YmJsZVwiOiB7XHJcbiAgICAgICAgXCJkaXN0YW5jZVwiOiA0MDAsXHJcbiAgICAgICAgXCJzaXplXCI6IDQwLFxyXG4gICAgICAgIFwiZHVyYXRpb25cIjogMixcclxuICAgICAgICBcIm9wYWNpdHlcIjogOCxcclxuICAgICAgICBcInNwZWVkXCI6IDNcclxuICAgICAgfSxcclxuICAgICAgXCJyZXB1bHNlXCI6IHtcclxuICAgICAgICBcImRpc3RhbmNlXCI6IDIwMCxcclxuICAgICAgICBcImR1cmF0aW9uXCI6IDAuNFxyXG4gICAgICB9LFxyXG4gICAgICBcInB1c2hcIjoge1xyXG4gICAgICAgIFwicGFydGljbGVzX25iXCI6IDRcclxuICAgICAgfSxcclxuICAgICAgXCJyZW1vdmVcIjoge1xyXG4gICAgICAgIFwicGFydGljbGVzX25iXCI6IDJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgXCJyZXRpbmFfZGV0ZWN0XCI6IHRydWVcclxufSk7Il0sImZpbGUiOiJzb2x1Y2lvbmVzLmpzIn0=

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticalesService {

  constructor() { }
  particalesLoad(sizeMax: number, sizeMin:number): any{
    const particales = {
      "particles": {
        "number": {
          "value": 190,
          "density": {
            "enable": true,
            "value_area": 700
          }
        },
        "color": {
          "value": "#fff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 0.5,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": sizeMax,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 5,
            "size_min": sizeMin,
            "sync": false
          }
        },
        "line_linked": {
          "enable_auto": false,
          "distance": 100,
          "color": "#fff",
          "opacity": 0.3,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1.5,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 60,
            "rotateY": 60
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
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 100,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 60,
            "size": 40,
            "duration": 2,
            "opacity": 0,
            "speed": 1.5
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
    }
    return particales;
  }
  
}

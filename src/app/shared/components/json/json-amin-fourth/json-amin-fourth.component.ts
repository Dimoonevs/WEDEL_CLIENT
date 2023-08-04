import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-json-amin-fourth',
  templateUrl: './json-amin-fourth.component.html',
  styleUrls: ['./json-amin-fourth.component.css']
})
export class JsonAminFourthComponent {

  private anim: any;
  animElem = {
    path: "assets/animation/Cooperation.json",
    autoplay: false,
    loop:false
  }

  onAnimate(animationItem: AnimationItem): void {    
    this.anim = animationItem
  }
  play(){
    this.anim.play()
    setTimeout(()=>{
      this.anim.stop()
    },2000)
  }

}

import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-json-amin-third',
  templateUrl: './json-amin-third.component.html',
  styleUrls: ['./json-amin-third.component.css']
})
export class JsonAminThirdComponent {
  private anim: any;
  animElem = {
    path: "assets/animation/FocusInInnovation.json",
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

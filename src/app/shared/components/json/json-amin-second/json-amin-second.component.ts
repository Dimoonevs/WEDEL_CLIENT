import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-json-amin-second',
  templateUrl: './json-amin-second.component.html',
  styleUrls: ['./json-amin-second.component.css']
})
export class JsonAminSecondComponent {
  private anim: any;
  animElem = {
    path: "assets/animation/Agility.json",
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

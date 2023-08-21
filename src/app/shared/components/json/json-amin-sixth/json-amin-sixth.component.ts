import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-json-amin-sixth',
  templateUrl: './json-amin-sixth.component.html',
  styleUrls: ['./json-amin-sixth.component.css']
})
export class JsonAminSixthComponent {

  private anim: any;
  animElem = {
    path: "assets/animation/Ownership.json",
    autoplay: false,
    loop:true
  }

  onAnimate(animationItem: AnimationItem): void {    
    this.anim = animationItem
  }
  play(){
    this.anim.play()
    setTimeout(()=>{
      this.anim.stop()
    },1500)
  }
}

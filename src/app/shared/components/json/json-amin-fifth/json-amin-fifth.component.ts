import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-json-amin-fifth',
  templateUrl: './json-amin-fifth.component.html',
  styleUrls: ['./json-amin-fifth.component.css']
})
export class JsonAminFifthComponent {
  private anim: any;
  animElem = {
    path: "assets/animation/GrowthMindset.json",
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
    },2000)
  }
}

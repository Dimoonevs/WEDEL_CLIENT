import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-json-amin-first',
  templateUrl: './json-amin-first.component.html',
  styleUrls: ['./json-amin-first.component.css']
})
export class JsonAminFirstComponent {

  private anim: any;
  animElem = {
    path: "assets/animation/CustomerFirst.json",
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
    },3000)
  }

}

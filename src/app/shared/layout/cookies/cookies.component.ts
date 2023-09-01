import { Component } from '@angular/core';
import { AnimationService } from '../../service/animation.service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css','../../../media/app.media-mobile.css', '../../../media/app.media-4K.css']
})
export class CookiesComponent {
  constructor(private service: AnimationService){}
  ngOnInit(): void {
    const headerNavs = document.querySelectorAll(".nav_all")
    const toggleLengAndTheme = document.querySelector('.content_rightnav')
    const burger = document.querySelector(".burger")
    const mobile = document.querySelector(".mobile")
    const cookies = document.querySelector('.cookies')
    
    toggleLengAndTheme?.classList.add('dispaly_flex')
    burger?.classList.add("none_elem")
    mobile?.classList.add("none_elem")
    cookies?.classList.add('none_elem')
    headerNavs.forEach(nav => {
      nav.classList.add("none_elem")
    });
    this.service.setTrueIsCkecked()
  }
}

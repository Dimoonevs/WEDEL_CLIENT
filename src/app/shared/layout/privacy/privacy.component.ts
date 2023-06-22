import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css','../../../media/app.media-mobile.css', '../../../media/app.media-4K.css']
})
export class PrivacyComponent {
  ngOnInit(): void {
    const headerNavs = document.querySelectorAll(".nav_all")
    const toggleLengAndTheme = document.querySelector('.content_rightnav')
    const burger = document.querySelector(".burger")
    const mobile = document.querySelector(".mobile")
    const cookies = document.querySelector('.cookies')

    toggleLengAndTheme?.classList.add('none_elem')
    burger?.classList.add("none_elem")
    mobile?.classList.add("none_elem")
    cookies?.classList.add('none_elem')
    headerNavs.forEach(nav => {
      nav.classList.add("none_elem")
    });
  }

}

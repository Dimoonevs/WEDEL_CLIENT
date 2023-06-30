import { Component, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-arrege',
  templateUrl: './arrege.component.html',
  styleUrls: ['./arrege.component.css','../../../../../media/app.media-mobile.css', '../../../../../media/app.media-4K.css']
})
export class ArregeComponent {
  @ViewChild(OwlCarousel)carousel!: OwlCarousel;
IsShowText = false;
ngAfterViewInit(): void {
  this.toggleCartContentCarusel();
}
carouselOptions = {
  loop: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 10000,
  autoplayHoverPause: true,
  dots: true,
  nav: false
};
onCarouselInitialized() {
  if (this.carousel) {
  }
}
showText(){
  this.IsShowText = !this.IsShowText;
  const serviceText = document.querySelectorAll('.arrage_cards_card')
  for(let i =0; i < serviceText.length; i++){
    serviceText[i].classList.toggle('arrage_cards_card--active')
  }
 }
 prevSlide() {
  if (this.carousel) {
    this.carousel.previous();
  }
  
}

nextSlide() {
  if (this.carousel) {
    this.carousel.next();
  }
}

toggleCartContentCarusel(){
  const cards = document.querySelectorAll(".owl-item")
  cards.forEach(card =>{
    if(card.classList.contains('active')){
      setTimeout(()=>{
        card.classList.add('active_card_content')
      },2000)
    }else{
      card.classList.remove('active_card_content')
    }
  })
}

}

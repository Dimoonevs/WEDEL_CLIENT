import { Component, ElementRef, HostListener, NgZone, Renderer2, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-arrege',
  templateUrl: './arrege.component.html',
  styleUrls: ['./arrege.component.css','../../../../../media/app.media-mobile.css', '../../../../../media/app.media-4K.css']
})
export class ArregeComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @ViewChild(OwlCarousel)carousel!: OwlCarousel;
IsShowTextOne = false;
IsShowTextTwo = false;
IsShowTextThree = false
ngAfterViewInit(): void {
  this.toggleCartContentCarusel();
}



carouselOptions = {
  loop: true,
  items: 1,
  autoplay: false,
  // autoplayTimeout: 10000,
  autoplayHoverPause: false,
  dots: true,
  nav: false,
  onChanged: this.onSlideChanged
};

onSlideChanged(event: any) {
  let activeCard = document.querySelectorAll(".arrage_cards_card")
    activeCard.forEach(card =>{
      card.classList.remove("arrage_cards_card--active")
  })
  this.IsShowTextOne = false;
  this.IsShowTextTwo = false;
  this.IsShowTextThree = false
}
onCarouselInitialized() {
  
}
showText(id:number){
  switch (id){
    case 1:
      {
        const serviceText = document.querySelectorAll('.arrage_cards_card_fs')
        for(let i =0; i < serviceText.length; i++){
          serviceText[i].classList.toggle('arrage_cards_card--active')
        }
        this.IsShowTextOne = !this.IsShowTextOne
        break;
      }
    case 2:
      {
        const serviceText = document.querySelectorAll('.arrage_cards_card_sc')
        for(let i =0; i < serviceText.length; i++){
          serviceText[i].classList.toggle('arrage_cards_card--active')
        }
        this.IsShowTextTwo = !this.IsShowTextTwo
        break;
      }
    case 3:
      {
        const serviceText = document.querySelectorAll('.arrage_cards_card_th')
        for(let i =0; i < serviceText.length; i++){
          serviceText[i].classList.toggle('arrage_cards_card--active')
        }
        this.IsShowTextThree = !this.IsShowTextThree
        break;
      }
  }
 }
 prevSlide() {
  if (this.carousel) {
    this.carousel.previous();
    this.carousel.options.autoplayTimeout = 10000
  }
  
}

nextSlide() {
  if (this.carousel) {
    this.carousel.next();
    this.carousel.options.autoplayTimeout = 10000
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

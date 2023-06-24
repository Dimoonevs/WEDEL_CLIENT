import { Component, ElementRef,HostListener,OnInit, ViewChild} from '@angular/core';
import { fromEvent} from 'rxjs';
import { OwlCarousel } from 'ngx-owl-carousel';
import { AnimationService } from '../../service/animation.service';
import * as lottie from 'lottie-web';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../../media/app.media-mobile.css', '../../../media/app.media-4K.css']
})

export class HomeComponent implements OnInit {
  @ViewChild(OwlCarousel)carousel!: OwlCarousel;
  currentForm = 'sender';
  slides = [0, 1, 2];
  activeSlide = 0;
  showDots = true; 
  showNav = true; 
  IsShowText = false;
  isVisible: boolean = false;
  isReadyVisible = false;
  
  intersectionObserver!: IntersectionObserver;
  animationConfig: object = {
    path: 'assets/your-animation.json' // Путь к вашему файлу анимации Lottie
  };

  animationCreated(animationItem: lottie.AnimationItem): void {
    // Обработчик, вызываемый при создании анимации
    // Здесь вы можете использовать animationItem для управления анимацией
  }

  


  progress: NodeListOf<any> | any;
  progressTextSpec: NodeListOf<any> | any;
  progressTextSender: NodeListOf<any> | any;
  progressTextData: NodeListOf<any> | any;
  progressTextReceiver: NodeListOf<any> | any;
  constructor(private animationService: AnimationService, private elRef: ElementRef) { 
    fromEvent(window, 'resize').subscribe(() => {
      this.pathMethod()
    });
  }
  @HostListener('window:scroll', [])
    onWindowScroll() {
      const element = document.getElementById('your_element_id');
      
      if (element) {
        const elementPosition = element.offsetTop + 5168;
        const scrollPosition = window.pageYOffset + window.innerHeight;
    
        if (scrollPosition > elementPosition && !this.isVisible) {
          this.isVisible = true
          
        }
        if (this.isVisible) {
          if(scrollPosition < 7385 && !this.isReadyVisible){
            const height = scrollPosition - elementPosition;
            element.style.setProperty('height', height + 'px');
            const allPointer = document.querySelectorAll(".story_card_manifesto_card_contaniner_block") 
            if(height >= 45 ){
              allPointer[0].classList.add("story_card_manifesto_card_contanier_wrapper_block--active")
            }
            if(height >= 127 ){
              allPointer[1].classList.add("story_card_manifesto_card_contanier_wrapper_block--active")
            }
            if(height >= 220 ){
              allPointer[2].classList.add("story_card_manifesto_card_contanier_wrapper_block--active")
            }
            if(height >= 310 ){
              allPointer[3].classList.add("story_card_manifesto_card_contanier_wrapper_block--active")
            }
            if(height >= 404 ){
              allPointer[4].classList.add("story_card_manifesto_card_contanier_wrapper_block--active")
            }
            if(height >= 494 ){
              allPointer[5].classList.add("story_card_manifesto_card_contanier_wrapper_block--active")
            }
            if(height >= 573 ){
              allPointer[6].classList.add("story_card_manifesto_card_contanier_wrapper_block--active")
            }
            if(height >= 620 ){
              allPointer[7].classList.add("story_card_manifesto_card_contanier_wrapper_block--active")
            }
          }else {
            this.isReadyVisible = true
            element.style.removeProperty('height')
            const allPointer = document.querySelectorAll(".story_card_manifesto_card_contaniner_block") 
            allPointer.forEach(element => {
              element.classList.add("story_card_manifesto_card_contanier_wrapper_block--active")
            })
          }
        }
      }
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

  ngAfterViewInit(): void {
    this.toggleCartContentCarusel();
  }

  onCarouselInitialized() {
    if (this.carousel) {
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


   setCurrencyForm(data:string){
    this.currentForm = data
    this.addClassIfNeed()
   }

   toggleHelp(index: number){
    const classHelpToggleBlocke = document.querySelectorAll('.help_card_content_toggles_toggle')
    classHelpToggleBlocke[index].classList.toggle('help_card_content_toggles_toggle--active')
   }

   addClassIfNeed(){
    this.progress = document.querySelector(".quotation_block_progress")
    this.progressTextSpec = document.querySelector(".quotation_block_progress_curcle_text-specifications")
    this.progressTextData = document.querySelector('.quotation_block_progress_curcle_text-data')
    this.progressTextSender = document.querySelector('.quotation_block_progress_curcle_text-sender')
    this.progressTextReceiver = document.querySelector('.quotation_block_progress_curcle_text-receiver')

    if(this.currentForm === "specifications" || this.currentForm === "data" || this.currentForm === "receiver" || this.currentForm === "summary" ){
      this.progress.classList.add("quotation_block_progress-done_sender")
      this.progressTextSpec.classList.add("quotation_block_progress_curcle_text_active")
    }else if(this.currentForm !== "specifications" && this.currentForm !== "data" && this.currentForm !== "receiver" ){
      this.progress.classList.remove("quotation_block_progress-done_sender")
      this.progressTextSpec.classList.remove("quotation_block_progress_curcle_text_active")
    }

    if(this.currentForm === 'date' || this.currentForm === "receiver" || this.currentForm === "summary"  ){
      this.progress.classList.add("quotation_block_progress-done_specifications")
      this.progress.classList.add("quotation_block_progress-done_sender")
      this.progressTextSpec.classList.add("quotation_block_progress_curcle_text_active")
    }else if(this.currentForm !== 'date' && this.currentForm !== "receiver" && this.currentForm !== "summary"){
      this.progress.classList.remove("quotation_block_progress-done_specifications")
    }

    if(this.currentForm === "receiver" || this.currentForm === "summary" ){
      this.progress.classList.add("quotation_block_progress-done_sender")
      this.progress.classList.add("quotation_block_progress-done_specifications")
      this.progressTextSpec.classList.add("quotation_block_progress_curcle_text_active")
      this.progress.classList.add("quotation_block_progress-done_date")
    }else if(this.currentForm !== "receiver" && this.currentForm !== "summary"){
      this.progress.classList.remove("quotation_block_progress-done_date")
    }
    if(this.currentForm === "summary" ){
      this.progress.classList.add("quotation_block_progress-done_receiver")
    }else if( this.currentForm !== "summary") {
      this.progress.classList.remove("quotation_block_progress-done_receiver")
    }

   }

   showText(){
    this.IsShowText = !this.IsShowText;
    const serviceText = document.querySelectorAll('.arrage_cards_card')
    for(let i =0; i < serviceText.length; i++){
      serviceText[i].classList.toggle('arrage_cards_card--active')
    }
    console.log("OK")
   }



  currentIndexLight = 0;
  currentIndexDark = 0;
  currentIndexLightMobile = 0;
  currentIndexDarkMobile = 0;
  paths: NodeListOf<any> | any;
  pathMobile: NodeListOf<any> | any;
  darkPaths: NodeListOf<any> | any;
  darkPathMobile: NodeListOf<any> | any;

  ngOnInit(): void {
    this.paths = document.querySelectorAll('.curcile');
    this.pathMobile = document.querySelectorAll('.mobile_curcile')
    this.darkPaths = document.querySelectorAll('.dark_curcile')
    this.darkPathMobile = document.querySelectorAll('.mobile_dark_curcile')


    setInterval(() => {
      this.animationService.blinkPaths(this.paths, this.currentIndexLight);
      this.currentIndexLight = (this.currentIndexLight + 1) % this.paths.length;
    }, 800);

    setInterval(() => {
      this.animationService.blinkDarkPaths(this.darkPaths, this.currentIndexDark);
      this.currentIndexDark = (this.currentIndexDark + 1) % this.darkPaths.length;
    }, 800)

    setInterval(() => {
      this.animationService.blinkMobilePaths(this.pathMobile, this.currentIndexLightMobile);
      this.currentIndexLightMobile = (this.currentIndexLightMobile + 1) % this.pathMobile.length;
    }, 800);

    setInterval(() => {
      this.animationService.blinkMobileDarkPaths(this.darkPathMobile, this.currentIndexDarkMobile);
      this.currentIndexDarkMobile = (this.currentIndexDarkMobile + 1) % this.darkPathMobile.length;
    }, 800);
  
    this.pathMethod();
  }

  pathMethod() {
    this.animationService.pathMethod(this.elRef);
    this.animationService.pathDarkMethod(this.elRef);
    this.animationService.pathMobileMethod(this.elRef);
    this.animationService.pathMobileDarkMethod(this.elRef);
  }

}

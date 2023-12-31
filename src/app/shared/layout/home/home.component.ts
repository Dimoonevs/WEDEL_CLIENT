import { Component, ElementRef,HostListener,OnInit, QueryList, ViewChild} from '@angular/core';
import { fromEvent} from 'rxjs';
import { AnimationLoader  } from 'ngx-lottie';
import { AnimationService } from '../../service/animation.service';
import { AnimationItem } from 'lottie-web';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../../media/app.media-mobile.css', '../../../media/app.media-4K.css']
})

export class HomeComponent implements OnInit {

  isVisible: boolean = false;
  isReadyVisible = false;
  isAnimationPlaying = false;
  IsShowText = false;
  animationProgress = 0;
  showCookiesSettings = false;
  lenguege!: string;
  htmlElement = this.elRef.nativeElement.ownerDocument.documentElement;
  isButtonDisabled = false
  enableAnalytics = false



  closeCookies(){
    this.showCookiesSettings = true
    const cookies = document.querySelector('.cookies_wrapper')
    cookies?.classList.add("none_elem")
  }
 


  scrollTo(nameBlock:string){
    this.appComponent.scrollTo(nameBlock);
  }
  
  constructor(private animationService: AnimationService, private elRef: ElementRef, private appComponent: AppComponent) { 
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

   toggleHelp(index: number){
    const classHelpToggleBlocke = document.querySelectorAll('.help_card_content_toggles_toggle')
    classHelpToggleBlocke[index].classList.toggle('help_card_content_toggles_toggle--active')
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

    this.showCookies();

    const lang = this.htmlElement.getAttribute('lang');
    this.lenguege = lang;
  }

  pathMethod() {
    this.animationService.pathMethod(this.elRef);
    this.animationService.pathDarkMethod(this.elRef);
    this.animationService.pathMobileMethod(this.elRef);
    this.animationService.pathMobileDarkMethod(this.elRef);
  }
  onScroll(event: Event) {
    const shadow = document.querySelector('.services_cards_card_content_texts_tabled_shadow')
    const shadowEnd = document.querySelector('.services_cards_card_content_texts_tabled_shadow_end')
    const element = event.target as HTMLElement;
    if (element.scrollLeft + element.offsetWidth >= 657) {
      shadow?.classList.remove("active_shadow")
      shadowEnd?.classList.add("active_shadow")
    }
    if (element.scrollLeft + element.offsetWidth < 657) {
      shadowEnd?.classList.remove("active_shadow")
      shadow?.classList.add("active_shadow")
    }
  }
  showText(){
    const hideBlocke = document.querySelector(".story_card") 
    const hideText = document.querySelector(".story_card_text")

    this.IsShowText = !this.IsShowText;
    hideBlocke?.classList.toggle("story_card--active")
    hideText?.classList.toggle("story_card_text--active")
    if(!this.IsShowText){
        this.scrollTo('story')
    }
  }
  scrollToStory(ele: string){
    const targetBlock = document.querySelector('.'+ele);
    if (targetBlock) {
      let scrollTopOffset = 0;
      if(window.innerWidth >= 2086){
        scrollTopOffset = targetBlock.getBoundingClientRect().top + window.pageYOffset - 120;
      }else{
        scrollTopOffset = targetBlock.getBoundingClientRect().top + window.pageYOffset - 90;
      }
      window.scrollTo({
        top: scrollTopOffset,
        behavior: 'smooth'
      });
    }
  }
  location(){
    window.open("https://we-del.logitudeworld.com/login", "_blank");
  }

  showCookies(){
    const cookies = document.querySelector(".cookies_wrapper")
      setTimeout(() =>{
        cookies?.classList.remove("none_elem")
      },4800)
  }
  
  routeToCookies(){
    window.open("https://we-del.cz/" + this.lenguege + "/cookies", '_blank');
  }
  toogleSetupCookies(){
    let setupCookies = document.querySelector(".cookies_setup_wrapper")
    let cookies = document.querySelector(".cookies")
    setupCookies?.classList.toggle("none_elem")
    cookies?.classList.toggle("cookies_back")
  }

  toogleSelectedCookies(name: string, i: any){
    if(name === "necessary"){
      let necessafyes = document.querySelectorAll(".cookies_setup_body_select_value_necessary")
      if(!necessafyes[i].classList.contains("cookies_setup_body_select_value_necessary--active")){
        for(let i = 0; i < necessafyes.length; i++){
          necessafyes[i].classList.toggle("cookies_setup_body_select_value_necessary--active")
        }
      }

    }else{
      let analyticales = document.querySelectorAll(".cookies_setup_body_select_value_analytical")
      if(!analyticales[i].classList.contains("cookies_setup_body_select_value_analytical--active")){
        for(let i = 0; i < analyticales.length; i++){
          analyticales[i].classList.toggle("cookies_setup_body_select_value_analytical--active")
        }
      }
    }
    this.buttonDisabledForSelectedCookies()
  }
  buttonDisabledForSelectedCookies(){
    let necessary = document.querySelector(".cookies_setup_body_select_value_necessary--active")
    if(necessary?.textContent === "Off"){
      this.isButtonDisabled = true
    }else{
      this.isButtonDisabled = false
    }
  }
  toggleAnalitycs(){
    let analyticale = document.querySelector(".cookies_setup_body_select_value_analytical--active")
    if (analyticale?.textContent === "Off") {
      localStorage.setItem('enableAnalytics', 'false');
    } else {
      localStorage.setItem('enableAnalytics', 'true');
    }
    this.toogleSetupCookies()
    this.closeCookies()
  }

  closeCookiesAndSetDefauld(){
    this.showCookiesSettings = true
    const cookies = document.querySelector('.cookies_wrapper')
    cookies?.classList.add("none_elem")
    let storage = localStorage.getItem("enableAnalytics")
    console.log(storage)
    if (storage === null){
      localStorage.setItem('enableAnalytics', 'true');
    }
  }

}

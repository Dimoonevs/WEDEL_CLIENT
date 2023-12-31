import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router, Routes } from '@angular/router';
import { ToastComponent } from './shared/module/toast/toast.component';
import { HttpClient } from '@angular/common/http';
import { AnimationService } from './shared/service/animation.service';
import { TimeService } from './shared/service/TimeService';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./media/app.media-mobile.css', './media/app.media-4K.css']
})


export class AppComponent {
  isActiveBg = false;
  isActive =true;
  isOpenBurger = false;
  lenguege!: string;
  isDark = false;
  sizeMax= 7;
  sizeMin = 2;
  colorValue = "#ECECED";
  shapeColor = "#ECECED";
  isLoading = false;
  htmlElement = this.elRef.nativeElement.ownerDocument.documentElement;
  

  isDarkTrue():boolean{
    return this.isDark;
  }
  backToHome(){
    this.router.navigate([''])
    setTimeout(() =>{
      location.reload()
    },800)
  }
  

  height = 100;
  width = 100;
  item = "assets/img/GB.svg"
  items=[
    {id:1, locale: 'EN', code: "en", leng: 'en'},
    {id:2, locale:'CZ', code: "cz", leng: 'cz'}
  ]
  
  constructor(private renderer: Renderer2, private timeService: TimeService, 
    private http: HttpClient, private router :Router, private elRef: ElementRef, 
    private activeRoute: ActivatedRoute, private toast: ToastComponent, private service:AnimationService){
    const storedIsDark = localStorage.getItem('isDark');
    this.isDark = storedIsDark ? JSON.parse(storedIsDark) : false;
  }
  @HostListener('window:resize')
  onResize() {
      this.loadParticales()
  }
  loadParticales():void{
    if(window.innerWidth >= 2076){
      this.sizeMax = 10;
      this.sizeMin = 4;
    }else if(window.innerWidth < 2076){
      this.sizeMax = 7;
      this.sizeMin = 2
    }
    if(this.isDark){
      this.colorValue = "#6A6D70"; 
      this.shapeColor = "#6A6D70";
    }else if(!this.isDark){
      this.colorValue = "#ECECED";
      this.shapeColor = "#ECECED";
    }
    this.http.get('assets/particles.json').subscribe((particlesSettings: any) => {
      particlesSettings.particles.size.value = this.sizeMax;
      particlesSettings.particles.size.anim.size_min = this.sizeMin;
      particlesSettings.particles.color.value = this.colorValue;
      particlesSettings.particles.line_linked.color = this.shapeColor;

      particlesJS('particles-js', particlesSettings, () => {
        
      });
    });
  }
  loading= false;
  loadingSequenceLoop(): void {
    const repetitions = 10;
    const delayBetweenRepetitions = 4000;
  
    for (let i = 0; i < repetitions; i++) {
      setTimeout(() => {
        this.loadingBiforeLoadAllPage();
        if(this.loading){
          const loadingDiv = document.querySelector('.loading')
          loadingDiv?.classList.add("none_elem")
          const closeElem = document.querySelector(".close_content")
          closeElem?.classList.remove("open")
        }else{
          this.loading = true
        }
      }, i * delayBetweenRepetitions);
    }
  }
  
  ngOnInit(): void {
    this.loadingSequenceLoop()
    this.loadParticales()
    


    const lang = this.htmlElement.getAttribute('lang');
    this.lenguege = lang;
    this.activeRoute.queryParams.subscribe((params: Params) => {
      if(params['contact']){
        this.toast.showToast("email");
      }if(params['quote']){
        this.toast.showToast("quote")
      }if(params['request']){
        this.toast.showToast("request")
      }
    })
    if(!this.isDark){
      const bodyElement = document.querySelector('body') 
      bodyElement?.classList.remove('dark')
    }else if(this.isDark){
      const bodyElement = document.querySelector('body') 
      bodyElement?.classList.add('dark')
    }
  }

  scheduleFunctionBasedOnTime(): void {
    const currentHour = 15
    if (currentHour <= 6 || currentHour >= 17){
      if(localStorage.getItem('isDark') == null){
        this.isDarkFunc()
        console.log("SDSDD")
        localStorage.setItem('isDark', JSON.stringify(null));
      }
    } else {
      if(localStorage.getItem('isDark') == null){
        this.isLightFunc()
        console.log("SDSDD")
        localStorage.setItem('isDark', JSON.stringify(null));
      }
    }
  }

  toggelItem(){
    this.isActive = true
  }
  onMouseMove(event: MouseEvent) {
    const container = this.elRef.nativeElement.querySelector('.container');
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    container.style.setProperty('--x', `${x}px`);
    container.style.setProperty('--y', `${y}px`);
    this.isActiveBg = true
  }
  outMouseMove(){
    this.isActiveBg = false
  }

  clickBurger(){
    this.isOpenBurger = !this.isOpenBurger
  }
  scrollTo(ele: string){
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
  scrollTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  
  isDarkFunc(){
    if(!this.isDark){
      const bodyElement = document.querySelector('body');
      const closeElem = document.querySelector(".close_content")
      closeElem?.classList.add("open")
      setTimeout(()=>{
        this.isDark = !this.isDark
        localStorage.setItem('isDark', JSON.stringify(this.isDark));
        bodyElement?.classList.add('dark');
        this.loadParticales()
        location.reload()
      },200)
    }
  }
  isLightFunc(){
    if(this.isDark){
      const bodyElement = document.querySelector('body');
      const closeElem = document.querySelector(".close_content")
      closeElem?.classList.add("open")
      setTimeout(()=>{
        this.isDark = !this.isDark
        localStorage.setItem('isDark', JSON.stringify(this.isDark));
        bodyElement?.classList.remove('dark')
        this.loadParticales()
        location.reload()
      },200)
    }
  }
  
  
  routeToPrivacy(){
    window.open("https://we-del.cz/" + this.lenguege + "/terms-and-conditions", '_blank');
    
  }
  routeToGDPR(){
    window.open("https://we-del.cz/" + this.lenguege + "/GDPR", '_blank');
    
  }
  loadingBiforeLoadAllPage(){
    const loadDiv = document.querySelector(".loading") as HTMLElement;

    loadDiv.classList.add("step-2");
  
    setTimeout(() => {
      loadDiv.classList.add("step-3");
  
      setTimeout(() => {
        loadDiv.classList.remove("step-3");
  
        setTimeout(() => {
          loadDiv.classList.remove("step-2");
        }, 500);
      }, 1500); 
    }, 500); 
    
    
  }
  routeToCookies(){
    window.open("https://we-del.cz/" + this.lenguege + "/cookies", '_blank');
  }

  closeAllOpeningPopup(){
    let phone = document.querySelector(".all_botom_select_options--focuse")
    let phoneImg = document.querySelector(".all_img_selected_phone");
    let currency = document.querySelector(".currency")
    let currencyImg = document.querySelector(".all_img_selected")
    let countryContainer = document.querySelector(".county_container")
    let countryImg = document.querySelector(".img_inpu_country")
    let footerImg = document.querySelector(".footer_img_number")
  
    phone?.classList.remove("all_botom_select_options--focuse")
    phoneImg?.classList.remove("all_img_selected--active")
    currency?.classList.remove("all_botom_select_options--focuse")
    currencyImg?.classList.remove("all_img_selected--active")
    countryContainer?.classList.remove("country--focus")
    countryImg?.classList.remove("img_inpu_country--focus")
    footerImg?.classList.remove("rotate_block")
    

    
  }
  
  
}



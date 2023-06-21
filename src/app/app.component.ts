import { Component, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastComponent } from './shared/module/toast/toast.component';
import { HttpClient } from '@angular/common/http';

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
  sizeWindow = window.innerWidth;
  sizeMax= 7;
  sizeMin = 2;
  colorValue = "#ECECED";
  shapeColor = "#ECECED";

  isDarkTrue():boolean{
    return this.isDark;
  }
  

  height = 100;
  width = 100;
  item = "assets/img/GB.svg"
  items=[
    {id:1, locale: 'EN', code: "en-US", leng: 'en-US'},
    {id:2, locale:'CZ', code: "cs", leng: 'cs'}
  ]
  
  constructor(private http: HttpClient, private router :Router, private elRef: ElementRef, private activeRoute: ActivatedRoute, private toast: ToastComponent){
    const storedIsDark = localStorage.getItem('isDark');
    this.isDark = storedIsDark ? JSON.parse(storedIsDark) : false;
  }
  @HostListener('window:resize')
  onResize() {
      this.loadParticales()
  }
  loadParticales():void{
    if(window.innerWidth >= 1653){
      this.sizeMax = 10;
      this.sizeMin = 4;
    }else if(window.innerWidth < 1653){
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
  ngOnInit(): void {
    this.loadParticales()

    const htmlElement = this.elRef.nativeElement.ownerDocument.documentElement;
    const lang = htmlElement.getAttribute('lang');
    this.lenguege = lang;
    this.activeRoute.queryParams.subscribe((params: Params) => {
      if(params['contact']){
        this.toast.showToast();
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
      const scrollTopOffset = targetBlock.getBoundingClientRect().top + window.pageYOffset - 63;
      window.scrollTo({
        top: scrollTopOffset,
        behavior: 'smooth'
      });
    }
  }

  
  isDarkFunc(){
    if(!this.isDark){
      this.isDark = !this.isDark
      localStorage.setItem('isDark', JSON.stringify(this.isDark));
      const bodyElement = document.querySelector('body');
      bodyElement?.classList.add('dark');
      this.loadParticales()
      location.reload()
    }
  }
  isLightFunc(){
    if(this.isDark){
      this.isDark = !this.isDark
      localStorage.setItem('isDark', JSON.stringify(this.isDark));
      const bodyElement = document.querySelector('body') 
      bodyElement?.classList.remove('dark')
      this.loadParticales()
      location.reload()
    }
  }
  closeCookies(){
    const cookies = this.elRef.nativeElement.querySelector('.cookies')
    cookies.style.setProperty('display', 'none')
  }
  routeToCookies(){
    this.router.navigate(['cookies'])
    this.closeCookies()
  }
}



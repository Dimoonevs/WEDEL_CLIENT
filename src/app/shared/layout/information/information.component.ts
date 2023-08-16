import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {
  lang!:string

  constructor(private elRef:ElementRef){

  }

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
    const htmlElement = this.elRef.nativeElement.ownerDocument.documentElement;
    const lang = htmlElement.getAttribute('lang');
    this.lang = lang;
  }
  toggleHelp(index: number){
    const classHelpToggleBlocke = document.querySelectorAll('.help_card_content_toggles_toggle')
    classHelpToggleBlocke[index].classList.toggle('help_card_content_toggles_toggle--active')
  }
  downloadPDF(){
    if(this.lang === "en-US"){
      const pdfUrl = 'assets/pdf/WE-DEL_General forwarding Terms and Conditions.pdf'; // Замените на фактический URL вашего PDF-файла
      const fileName = 'WE-DEL_General forwarding Terms and Conditions.pdf'; // Задайте имя для скачиваемого файла

      const link = document.createElement('a');
      link.href = pdfUrl;
      link.target = '_blank';
      link.download = fileName;
      link.click();
    }
    if(this.lang === 'cs'){
      const pdfUrl = "assets/pdf/WE-DEL_Vseobecne zasilatelske podminky.pdf";       
      const fileName = 'WE-DEL_Vseobecne zasilatelske podminky.pdf'; 

      const link = document.createElement('a');
      link.href = pdfUrl;
      link.target = '_blank';
      link.download = fileName;
      link.click();
    }
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  isActive = false;

  constructor(private router: Router,  private route: ActivatedRoute) { }

  ngOnInit() {
    
  }
  showToast(formName:string){
    const toasts = document.querySelectorAll('.toast_container')
    this.isActive = true;
    if(formName === "email"){
      toasts[0].classList.add("toast_active")
    }else if(formName === "request"){
      toasts[1].classList.add("toast_active")
    }else if(formName === "quote"){
      toasts[2].classList.add("toast_active")
    }
 
    setTimeout(() => {
      this.closeToast()
    },5000)
  }

  closeToast() {
    const toast = document.querySelector('.toast_active')
    toast?.classList.remove('toast_active')
    this.isActive= false      
    const queryParams = { ...this.route.snapshot.queryParams }; 
    delete queryParams['contact'];
    delete queryParams['request'];
    delete queryParams['quote'];
    this.router.navigate(['/'], { queryParams });
    localStorage.removeItem('queryParams');
  }

}

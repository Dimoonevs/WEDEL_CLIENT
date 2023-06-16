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
  showToast(){
    const toast = document.querySelector('.toast_container')
    this.isActive = true;
    toast?.classList.add('toast_active')

    setTimeout(() => {
      this.closeToast()
    },5000)
  }

  closeToast() {
    const toast = document.querySelector('.toast_container')
    toast?.classList.remove('toast_active')
    this.isActive= false      
    const queryParams = { ...this.route.snapshot.queryParams }; 
    delete queryParams['contact'];
    this.router.navigate(['/'], { queryParams });
    localStorage.removeItem('queryParams');
  }

}

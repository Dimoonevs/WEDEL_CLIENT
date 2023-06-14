import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { QuotationControllerService } from 'src/app/shared/controller/quotation-controller.service';
import { QuestionReq} from 'src/app/shared/module/interfaces';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../../../../media/app.media-mobile.css', '../../../../media/app.media-4K.css']
})
export class ContactComponent {
  contactForm: FormGroup | any;


  constructor( private fb: FormBuilder, private controller: QuotationControllerService, private router:Router) { this._createForm()}

  private _createForm(){
    this.contactForm = this.fb.group({
      Message:['', [
        Validators.required
      ]],
      Name:['', [
        Validators.required
      ]],
      Email:['',[
        Validators.required,
        Validators.email
      ]],
      Phone:['',[]]

    })
  }
  getControl(controlName: string): AbstractControl {
    return this.contactForm.get(`${controlName}`);
  }

  submitCallRequest(){
    const request: QuestionReq = {
      name: this.contactForm.value.Name,
      email: this.contactForm.value.Email,
      number: this.contactForm.value.Phone,
      message: this.contactForm.value.Message
    }
    this.controller.submitQueastionReq(request).subscribe(req =>{
      this.router.navigate(['/'], {
        queryParams: {
          contact: true
        }
      })
    })
    this.contactForm.reset();
  }


}

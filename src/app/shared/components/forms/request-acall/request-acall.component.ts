import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'jquery';
import { QuotationControllerService } from 'src/app/shared/controller/quotation-controller.service';
import { RequestACallReq } from 'src/app/shared/module/interfaces';

@Component({
  selector: 'app-request-acall',
  templateUrl: './request-acall.component.html',
  styleUrls: ['./request-acall.component.css']
})
export class RequestACallComponent {
  requestACallForm: FormGroup | any;

  constructor( private fb: FormBuilder, private controller: QuotationControllerService) { this._createForm()}

  private _createForm(){
    this.requestACallForm = this.fb.group({
      Phone:['',[]]

    })
  }

  getControl(controlName: string): AbstractControl {
    return this.requestACallForm.get(`${controlName}`);
  }

  submitReqACAll(){
    const req: RequestACallReq = {
      phone: this.requestACallForm.value.Phone
    }

    this.controller.submitRequestACall(req).subscribe(() =>{
      console.log('succsecful')
      location.reload()
    })
  }

}

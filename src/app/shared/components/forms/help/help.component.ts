import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuotationControllerService } from 'src/app/shared/controller/quotation-controller.service';
import { MessageQuestionReq } from 'src/app/shared/module/interfaces';
import { FormService } from 'src/app/shared/service/form.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css', '../../../../media/app.media-mobile.css', '../../../../media/app.media-4K.css']
})
export class HelpComponent {

  helpForm: FormGroup | any;


  constructor( private fb: FormBuilder, private controller: QuotationControllerService) { this._createForm()}

  private _createForm(){
    this.helpForm = this.fb.group({
      Message:['', [
        Validators.required
      ]],
      Name:['', []],
      Email:['',[
        Validators.required,
        Validators.email
      ]],
      Subject:['',[
        Validators.required
      ]]

    })
  }
  getControl(controlName: string): AbstractControl {
    return this.helpForm.get(`${controlName}`);
  }

  helpSubmit(){
    const request: MessageQuestionReq ={
      name: this.helpForm.value.Name,
      email: this.helpForm.value.Email,
      subject: this.helpForm.value.Subject,
      message: this.helpForm.value.Message
    }
    this.controller.submitMessageQuestion(request).subscribe(req =>{
      console.log("Seuccesfull")
    })
    location.reload()
  }


}

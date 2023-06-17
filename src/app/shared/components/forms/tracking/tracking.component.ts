import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css', '../../../../media/app.media-mobile.css', '../../../../media/app.media-4K.css']
})
export class TrackingComponent {

  inputValue: string = '';

  trackingForm: FormGroup | any; 

  constructor(private fb: FormBuilder) { this._createForm()}

  _createForm(){
    this.trackingForm =this.fb.group({
      Tracking:['',[
        Validators.required,
        Validators.minLength(6)
      ]]
    })
  }

  getControl(controlName: string): AbstractControl {
    return this.trackingForm.get(`${controlName}`);
  }

  addPrefix() {
    if (!this.inputValue.startsWith('WD') ) {
      this.inputValue = 'WD' + this.inputValue;
    }
  }
}

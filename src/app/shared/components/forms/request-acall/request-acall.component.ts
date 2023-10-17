import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { QuotationControllerService } from 'src/app/shared/controller/quotation-controller.service';
import { CountryAndCallingCodeReq, RequestACallReq } from 'src/app/shared/module/interfaces';
import { FormService } from 'src/app/shared/service/form.service';

@Component({
  selector: 'app-request-acall',
  templateUrl: './request-acall.component.html',
  styleUrls: ['./request-acall.component.css','../../../../media/app.media-mobile.css', '../../../../media/app.media-4K.css']
})
export class RequestACallComponent {
  requestACallForm: FormGroup | any;
  isActiveSelect = false;
  countries: any[] = [];
  callingCode: any[] = [];
  digitsAfterCode: any[] = [];
  digitCode = 9;
  countryCode = "+380"
  phoneMask='000 000 000'

  constructor(private quotionController: QuotationControllerService, private cdr: ChangeDetectorRef, private formService: FormService, private fb: FormBuilder, private controller: QuotationControllerService, private router:Router) { this._createForm()}

  private _createForm(){
    this.requestACallForm = this.fb.group({
      Phone:['',[Validators.required]]

    })
  }
  ngOnInit(){
    this.getCountryAndCallingCodeAnddigitsThenLoader()
  }

  get _phone(){
    return this.requestACallForm.get("Phone")
  }

  getControl(controlName: string): AbstractControl {
    return this.requestACallForm.get(`${controlName}`);
  }

  submitReqACAll(){
    const req: RequestACallReq = {
      phone: this.countryCode + this.requestACallForm.value.Phone
    }

    this.controller.submitRequestACall(req).subscribe(() =>{
      this.router.navigate(['/'], {
        queryParams: {
          request: true
        }
      })
      this.requestACallForm.reset()
    })
  }
  toggleSelectItem(){
    this.isActiveSelect = !this.isActiveSelect
    if(this.isActiveSelect){
      if (this.countries.length == 0 || this.callingCode.length == 0 || this.digitCode == 0){
        this.getCountryAndCallingCodeAnddigitsThenLoader()
      }
    }
  }
  getCountryAndCallingCodeAnddigitsThenLoader(){
    this.quotionController.getAllCountryAndCallingCode().subscribe(
      (countryAndCallingCode: CountryAndCallingCodeReq) => {
        for(let i = 0; i < countryAndCallingCode.data.length; i++){
          this.countries.push(countryAndCallingCode.data[i].country);
          this.callingCode.push(countryAndCallingCode.data[i].callingCode);
          this.digitsAfterCode.push(countryAndCallingCode.data[i].digitsAfterCode);
        }
      }
    )
    console.log("Allery form loading")
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if(this.isActiveSelect){
      this.searchCode(event.key);
    }
  }
  
  searchCode(leter: string){
    this.callingCode = []
    this.countries = []
    this.digitsAfterCode = []
    this.quotionController.searchCountry({name:leter}).subscribe((countries: CountryAndCallingCodeReq)=>{
      for(let i = 0; i < countries.data.length; i++){
        this.countries.push(countries.data[i].country);
        this.callingCode.push(countries.data[i].callingCode);
        this.digitsAfterCode.push(countries.data[i].digitsAfterCode)
      }
    })
  }
  getPhoneCode(code: string, number:number){
    this.countryCode = code;
    this.digitCode = number;
    this.countries = []
    this.toggleSelectItem()
    this.getPattern()
  }

  getPattern(){

    switch(this.digitCode){
      case 5: 
        this.phoneMask = '000 00'
        break;
      case 6: 
        this.phoneMask = '000 000'
        break;
      case 7: 
        this.phoneMask = '000 000 0'
        break;
      case 8: 
        this.phoneMask = '000 000 00'
        break;
      case 9: 
        this.phoneMask = '000 000 000'
        break;
      case 10: 
        this.phoneMask = '000 000 00 00'
        break;
      case 11:
        this.phoneMask = '000 000 000 00'
        break;
    }
  }
}

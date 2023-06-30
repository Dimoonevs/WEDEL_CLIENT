import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { QuotationControllerService } from 'src/app/shared/controller/quotation-controller.service';
import { HomeComponent } from 'src/app/shared/layout/home/home.component';
import { QuotationComponent } from 'src/app/shared/layout/home/layouts/quotation/quotation.component';
import { CountryAndCallingCodeReq, SearchCountryReq } from 'src/app/shared/module/interfaces';
import { FormService } from 'src/app/shared/service/form.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css','../../../../media/app.media-mobile.css', '../../../../media/app.media-4K.css']
})
export class ReceiverComponent {
  codeCallingIsActive = false;
  countryInpIsActive =false;
  countries: any[] = [];
  callingCode: any[] = [];
  digitsAfterCode: any[] = [];
  reciverForm: FormGroup | any;
  valueCountry = this.formService.getReceiverCountry();
  city = this.formService.getReceiverCity();
  company = this.formService.getReceiverCompany();
  postal = this.formService.getReceiverPostal();
  street = this.formService.getReceiverStreet();
  contacts = this.formService.getReceiverContacts();
  email = this.formService.getReceiverEmail();
  phoneCode = this.formService.getReceiverPhoneCode()
  searchCountryReq!: SearchCountryReq;
  digitCode = this.formService.getReceiverDigitCode();
  phoneMask = '000 000 000'


  ngOnInit(){
    this.getCountryAndCallingCodeAnddigits()
    
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if(this.codeCallingIsActive){
      this.searchCode(event.key);
    }
  }
  constructor( private cdr: ChangeDetectorRef, private quotionController: QuotationControllerService, private http: HttpClient, private fb: FormBuilder, private homeComponent: QuotationComponent, private formService: FormService) { this._createForm()}

  onKeay(country:string){
    this.quotionController.searchCountry({name: country}).subscribe((country: CountryAndCallingCodeReq) =>{
      this.countries = []
      for(let i = 0; i < country.data.length; i++){
        this.countries.push(country.data[i].country);
      }
    })
}

  private _createForm(){
    this.reciverForm = this.fb.group({
      Company:['', [
        Validators.required
      ]],
      Country:['', [
        Validators.required
      ]],
      City:['', [
        Validators.required
      ]],
      Postal:['', [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],
      Street:['', [
        Validators.required
      ]],
      Contact:['', [
        Validators.required
      ]],
      Email:['', [
        Validators.required,
        Validators.email
      ]]

    })
  }
  getControl(controlName: string): AbstractControl {
    return this.reciverForm.get(`${controlName}`);
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
    this.reciverForm.addControl(`Contact`, this.fb.control('', [Validators.required, Validators.minLength(this.digitCode)]));
  }
  searchCode(leter: string){
    this.callingCode = []
    this.countries = []
    this.digitsAfterCode = []
    this.quotionController.searchCountry({name:leter}).subscribe((countries: CountryAndCallingCodeReq)=>{
      for(let i = 0; i < countries.data.length; i++){
        this.countries.push(countries.data[i].country);
        this.callingCode.push(countries.data[i].callingCode);
        this.digitsAfterCode.push(countries.data[i].digitsAfterCode);
      }
    })
  }

  
  slectValue(country: string){
    this.formService.setReceiverCountry(country)
  }
  addFocuse(){
    const inputCountry = document.querySelector('.country')
    const inputImg = document.querySelector('.img_inpu_country')
    inputCountry?.classList.add("country--focus")
    inputImg?.classList.add("img_inpu_country--focus")
    this.countryInpIsActive = true;

    const select = document.querySelector('.all_botom_select_options_codes')
    const img = document.querySelector(".all_img_selected_phone")
    select?.classList.remove('all_botom_select_options--focuse')
    img?.classList.remove("all_img_selected--active")
    this.codeCallingIsActive = false
    
  }
  slectValueClick(country: string){
    const inputCountry = document.querySelector('.country')
    const inputImg = document.querySelector('.img_inpu_country')
    inputCountry?.classList.remove("country--focus")
    inputImg?.classList.remove("img_inpu_country--focus")
    this.valueCountry = country
    this.slectValue(country)
  }

  getCountryAndCallingCodeAnddigits(){
    this.quotionController.getAllCountryAndCallingCode().subscribe(
      (countryAndCallingCode: CountryAndCallingCodeReq) => {
        for(let i = 0; i < countryAndCallingCode.data.length; i++){
          this.countries.push(countryAndCallingCode.data[i].country);
          this.callingCode.push(countryAndCallingCode.data[i].callingCode);
          this.digitsAfterCode.push(countryAndCallingCode.data[i].digitsAfterCode);
        }
      }
    )

  }
  getCountry(){
    this.countries = []
    this.quotionController.getAllCountryAndCallingCode().subscribe(
      (countryAndCallingCode: CountryAndCallingCodeReq) => {
        for(let i = 0; i < countryAndCallingCode.data.length; i++){
          this.countries.push(countryAndCallingCode.data[i].country);
        }
      }
    )
  }

  submitSender(){
    this.saveForm()
    this.homeComponent.setCurrencyForm("summary")
  }
  previousStep(){
    this.saveForm()
    this.homeComponent.setCurrencyForm('date')
  }

  toogleActiveForSlectOption(){
    const select = document.querySelector('.all_botom_select_options')
    const img = document.querySelector(".all_img_selected")
    select?.classList.toggle('all_botom_select_options--focuse')
    img?.classList.toggle("all_img_selected--active")
  }
  toogleActiveForSlectOptionPhone(){
    this.callingCode = []
    this.countries = []
    this.digitsAfterCode = []
    this.getCountryAndCallingCodeAnddigits()

    const select = document.querySelector('.all_botom_select_options_codes')
    const img = document.querySelector(".all_img_selected_phone")
    select?.classList.toggle('all_botom_select_options--focuse')
    img?.classList.toggle("all_img_selected--active")

    const inputCountry = document.querySelector('.country')
    const inputImg = document.querySelector('.img_inpu_country')
    inputCountry?.classList.remove("country--focus")
    inputImg?.classList.remove("img_inpu_country--focus")
    this.codeCallingIsActive = !this.codeCallingIsActive
  }
  onFocusNumber(){
    const codeNumber = document.querySelector(".all_top_block_phone_code");
    codeNumber?.classList.toggle("all_top_block_phone_code--focusess")
  }
  saveForm(){
    this.formService.setReceiverCity(this.reciverForm.value.City)
    this.formService.setReceiverCompany(this.reciverForm.value.Company)
    this.formService.setReceiverPostal(this.reciverForm.value.Postal)
    this.formService.setReceiverStreet(this.reciverForm.value.Street)
    this.formService.setReceiverContacts(this.reciverForm.value.Contact)
    this.formService.setReceiverEmail(this.reciverForm.value.Email)
  }
  valuePhone(str:string, i: number){
    this.formService.setReceiverPhoneCode(str);
    this.phoneCode = this.formService.getReceiverPhoneCode()

    this.formService.setReceiverDigitCode(this.digitsAfterCode[i])
    this.digitCode = this.formService.getReceiverDigitCode();
    this.toogleActiveForSlectOptionPhone()
    
    this.getPattern();
    this.cdr.detectChanges();
  }
}

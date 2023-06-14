import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { QuotationControllerService } from 'src/app/shared/controller/quotation-controller.service';
import { HomeComponent } from 'src/app/shared/layout/home/home.component';
import { CountryAndCallingCodeReq, SearchCountryReq } from 'src/app/shared/module/interfaces';
import { FormService } from 'src/app/shared/service/form.service';



@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css','../../../../media/app.media-mobile.css', '../../../../media/app.media-4K.css']
})
export class SenderComponent {



  
  codeCallingIsActive = false;
  countryInpIsActive =false;
  countries: any[] = [];
  callingCode: any[] = [];
  digitsAfterCode: any[] = [];
  senderForm: FormGroup | any;
  valueCountry = this.formService.getSenderCountry();
  valueCurrency = this.formService.getSenderCurrency()
  city = this.formService.getSenderCity();
  company = this.formService.getSenderCompany();
  postal = this.formService.getSenderPostal();
  street = this.formService.getSenderStreet();
  contacts = this.formService.getSenderContacts();
  buget = this.formService.getSenderBuget();
  phoneCode = this.formService.getSenderPhoneCode();
  digitCode = this.formService.getSenderDigitCode();
  searchCountryReq!: SearchCountryReq;
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
  constructor(private quotionController: QuotationControllerService, private http: HttpClient, private fb: FormBuilder, private homeComponent: HomeComponent, private formService: FormService, private cdr: ChangeDetectorRef) { this._createForm()}

  onKeay(country:string){
      this.quotionController.searchCountry({name: country}).subscribe((country: CountryAndCallingCodeReq) =>{
        this.countries = []
        for(let i = 0; i < country.data.length; i++){
          this.countries.push(country.data[i].country);
        }
      })
  }

  private _createForm(){
    this.senderForm = this.fb.group({
      Company:['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z 0-9]+$')
      ]],
      Country:['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]+$')
      ]],
      City:['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]+$')
      ]],
      Postal:['', [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],
      Street:['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z 0-9-_]+$')
      ]],
      
      Budget:['', [
        Validators.pattern('^[0-9]+$')
      ]],
      Contact:['', [
        Validators.required
      ]]

    })
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
    this.senderForm.addControl(`Contact`, this.fb.control('', [Validators.required, Validators.minLength(this.digitCode)]));
  }

  get _company(){
    return this.senderForm.get("Company")
  }
  get _city(){
    return this.senderForm.get("City")
  }
  get _postal(){
    return this.senderForm.get("Postal")
  }
  get _street(){
    return this.senderForm.get("Street")
  }
  get _contact(){
    return this.senderForm.get("Contact")
  }
  get _budget(){
    return this.senderForm.get("Budget")
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

  submitSender(){
    this.saveForm()
    this.homeComponent.setCurrencyForm("specifications")
  }
  addActive(numb: string){
    const message = document.querySelector("."+numb)
    message?.classList.add("all_top_block_text-message--active")
  }
  removeActive(){
    const messageActive = document.querySelector('.all_top_block_text-message--active')
    messageActive?.classList.remove("all_top_block_text-message--active")
  }

  slectValue(country: string){
    this.formService.setSenderCountry(country);
  }
  addFocuse(){
    const inputCountry = document.querySelector('.country')
    const inputImg = document.querySelector('.img_inpu_country')
    inputCountry?.classList.add("country--focus")
    inputImg?.classList.add("img_inpu_country--focus")
    this.countries = []
    this.getCountryAndCallingCodeAnddigits()
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
    this.getCountry()
  }
  selectValueBudget(str:string){
    this.formService.setSenderCurrency(str);
    this.valueCurrency = this.formService.getSenderCurrency()
    const select = document.querySelector('.all_botom_select_options')
    const img = document.querySelector(".all_img_selected")
    select?.classList.remove('all_botom_select_options--focuse')
    img?.classList.remove("all_img_selected--active")
  }
  toogleActiveForSlectOption(){
    const select = document.querySelector('.all_botom_select_options')
    const img = document.querySelector(".all_img_selected")
    select?.classList.toggle('all_botom_select_options--focuse')
    img?.classList.toggle("all_img_selected--active")
    this.senderForm.removeControlByName('Contact');
  }
  toogleActiveForSlectOptionPhone(){
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
    this.formService.setSenderCity(this.senderForm.value.City)
    this.formService.setSenderCompany(this.senderForm.value.Company)
    this.formService.setSenderPostal(this.senderForm.value.Postal)
    this.formService.setSenderStreet(this.senderForm.value.Street)
    this.formService.setSenderContacts(this.senderForm.value.Contact)
    this.formService.setSenderBuget(this.senderForm.value.Budget)
  }
  valuePhone(str:string, i:number){
    this.formService.setSenderPhoneCode(str);
    this.phoneCode = this.formService.getSenderPhoneCode();
    this.formService.setSenderDigitCode(this.digitsAfterCode[i])
    this.digitCode = this.formService.getSenderDigitCode();
    this.toogleActiveForSlectOptionPhone()
    
    this.getPattern();
    this.cdr.detectChanges();
  }
}
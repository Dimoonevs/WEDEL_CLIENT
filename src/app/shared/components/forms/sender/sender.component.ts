import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuotationControllerService } from 'src/app/shared/controller/quotation-controller.service';
import { QuotationComponent } from 'src/app/shared/layout/home/layouts/quotation/quotation.component';
import { CountryAndCallingCodeReq, SearchCountryReq } from 'src/app/shared/module/interfaces';
import { FormService } from 'src/app/shared/service/form.service';



@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css','../../../../media/app.media-mobile.css', '../../../../media/app.media-4K.css']
})
export class SenderComponent {

  isVisible = false;
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
  isLoadCountryInput = true
  isLoadCallingCode = true
  phoneMask = '000 000 000'

  onVisible() {
    this.isVisible = true;
    this.getCountryAndCallingCodeAnddigits()
  }

  ngOnInit(){
    this.getCountryAndCallingCodeAnddigitsThenLoader()
    // this.countries = [
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem"
    // ]
  }

  onScroll(event: Event, s: string) {
    const shadow = document.querySelector("."+s+"_container_shadow_start")
    const shadowEnd = document.querySelector('.'+s+'_container_shadow_end')
    const element = event.target as HTMLElement;
    let scrollPositionOfTop = element.scrollTop
    if(scrollPositionOfTop > 44 || scrollPositionOfTop < 9027){
      shadow?.classList.remove("active_shadow")
      shadowEnd?.classList.remove("active_shadow")
      shadow?.classList.add("active_shadow")
      shadowEnd?.classList.add("active_shadow")
    } 
    if (scrollPositionOfTop <= 44){
      shadow?.classList.remove("active_shadow")
      shadowEnd?.classList.remove("active_shadow")
      shadowEnd?.classList.add("active_shadow")
    }
    if (scrollPositionOfTop >= 9027){
      shadow?.classList.remove("active_shadow")
      shadowEnd?.classList.remove("active_shadow")
      shadow?.classList.add("active_shadow")
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if(this.codeCallingIsActive){
      this.searchCode(event.key);
    }
  }
  constructor(private quotionController: QuotationControllerService, private http: HttpClient, private fb: FormBuilder, private homeComponent: QuotationComponent, private formService: FormService, private cdr: ChangeDetectorRef) { this._createForm()}

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
      ]],
      Country:['', [
        Validators.required,
        Validators.pattern('^[A-Za-z ]+$')
      ]],
      City:['', [
        Validators.required,
      ]],
      Postal:['', [
        Validators.required,
      ]],
      Street:['', [
        Validators.required,
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
  getCountryAndCallingCodeAnddigitsThenLoader(){
    this.quotionController.getAllCountryAndCallingCode().subscribe(
      (countryAndCallingCode: CountryAndCallingCodeReq) => {
        for(let i = 0; i < countryAndCallingCode.data.length; i++){
          this.countries.push(countryAndCallingCode.data[i].country);
          this.callingCode.push(countryAndCallingCode.data[i].callingCode);
          this.digitsAfterCode.push(countryAndCallingCode.data[i].digitsAfterCode);
        }
        this.isLoadCallingCode = true
      }
    )
    console.log("Allery form loading")
  }
  getCountryAndCallingCodeAnddigits(){
    if (this.countries.length == 0 || this.callingCode.length == 0 || this.digitCode == 0){
      console.log(this.countries.length)
      this.getCountryAndCallingCodeAnddigitsThenLoader()
    }

  }
  getCountry(){
    if (this.countries.length == 0 || this.callingCode.length == 0 || this.digitCode == 0){
      this.countries = []
      this.getCountryAndCallingCodeAnddigitsThenLoader()
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
        this.digitsAfterCode.push(countries.data[i].digitsAfterCode);
      }
    })
  }
  submitSender(){
    this.saveForm()
    this.formService.scrollTop()
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
  toggleFocuse(){
    if(!this.countryInpIsActive){
      const inputCountry = document.querySelector('.county_container')
      const inputImg = document.querySelector('.img_inpu_country')
      inputCountry?.classList.add("country--focus")
      inputImg?.classList.add("img_inpu_country--focus")
      // this.countries = []
      this.getCountryAndCallingCodeAnddigits()
      this.countryInpIsActive = true;
    }else{
      const inputCountry = document.querySelector('.county_container')
      const inputImg = document.querySelector('.img_inpu_country')
      inputCountry?.classList.remove("country--focus")
      inputImg?.classList.remove("img_inpu_country--focus")
      // this.countries = []
      this.countryInpIsActive = false;
    }
    const select = document.querySelector('.all_botom_select_options_codes_container')
    const img = document.querySelector(".all_img_selected_phone")
    select?.classList.remove('all_botom_select_options--focuse')
    img?.classList.remove("all_img_selected--active")
    this.codeCallingIsActive = false
  }
  addFocuse(){
    if (!this.countryInpIsActive){
      const inputCountry = document.querySelector('.county_container')
      const inputImg = document.querySelector('.img_inpu_country')
      inputCountry?.classList.add("country--focus")
      inputImg?.classList.add("img_inpu_country--focus")
      // this.countries = []
      this.getCountryAndCallingCodeAnddigits()
      this.countryInpIsActive = true;
    }
    
    
    const select = document.querySelector('.all_botom_select_options_codes_container')
    const img = document.querySelector(".all_img_selected_phone")
    select?.classList.remove('all_botom_select_options--focuse')
    img?.classList.remove("all_img_selected--active")
    this.codeCallingIsActive = false

  }
  slectValueClick(country: string){
    const inputCountry = document.querySelector('.county_container')
    const inputImg = document.querySelector('.img_inpu_country')
    inputCountry?.classList.remove("country--focus")
    inputImg?.classList.remove("img_inpu_country--focus")
    this.valueCountry = country
    this.countries = []
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
    const select = document.querySelector('.all_botom_select_options_codes_container')
    const img = document.querySelector(".all_img_selected_phone")
    select?.classList.toggle('all_botom_select_options--focuse')
    img?.classList.toggle("all_img_selected--active")
    

    const inputCountry = document.querySelector('.county_container')
    const inputImg = document.querySelector('.img_inpu_country')
    inputCountry?.classList.remove("country--focus")
    inputImg?.classList.remove("img_inpu_country--focus")
    this.codeCallingIsActive = !this.codeCallingIsActive
    // this.getCountry()
    this.getCountryAndCallingCodeAnddigits()
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
    this.countries = []
    this.getCountryAndCallingCodeAnddigitsThenLoader()
    this.getPattern();
    this.cdr.detectChanges();
  }
}
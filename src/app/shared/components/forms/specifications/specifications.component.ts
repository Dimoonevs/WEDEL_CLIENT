import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeComponent } from 'src/app/shared/layout/home/home.component';
import { QuotationComponent } from 'src/app/shared/layout/home/layouts/quotation/quotation.component';
import { FormService } from 'src/app/shared/service/form.service';

function asyncValidatorFunction(control: AbstractControl): Promise<any> {
  return new Promise((resolve) => {
    const fieldValue = control.value;
    const onlyNumbers = /[0-9.]+$/.test(fieldValue); 
    
    setTimeout(() =>{
    if (onlyNumbers) {
      resolve(null);
    } else {
      resolve({ onlyNumbers: true });
    }
  },200)
  });
}

@Component({
  selector: 'app-specifications',
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.css','../../../../media/app.media-mobile.css', '../../../../media/app.media-4K.css']
})
export class SpecificationsComponent {
  isActive= true;
  isActiveShipment= true
  isActiveStackable= false
  specificationsForm: FormGroup | any;
  shipment_select = this.formService.getSpecPriorityShipment();
  stackable_select = this.formService.getSpecIsStackable();
  specifications_select = this.formService.getSpecGoodsType();
  boxes: number[] = [this.formService.getSpecLengthBoxes()];
  valueBuget = this.formService.getSpecCurrency();
  width = this.formService.getSpecBoxesWidth();
  height = this.formService.getSpecBoxesHeight();
  length = this.formService.getSpecBoxesLength();
  quantity = this.formService.getSpecBoxesQuantity()
  totalQuantity = this.formService.getSpecTotalQuantity();
  totalWeight = this.formService.getSpecTotalWeight();
  descriptionGoods = this.formService.getSpecDescriptionGoods();
  totalValue = this.formService.getSpecTotalValue();


  onToggleActiveShipment(){
    this.isActiveShipment  = !this.isActiveShipment 
    if(this.isActiveShipment){
      this.formService.setSpecPriorityShipment("Transit time")
    }else{
      this.formService.setSpecPriorityShipment("Price")
    }
  }
  onToggleActiveStackable(){
    this.isActiveStackable = !this.isActiveStackable 
    if(this.isActiveStackable){
      this.formService.setSpecIsStackable("Yes")
    }else{
      this.formService.setSpecIsStackable("No")
    }
  }
  onToggleActive(){
    this.isActive = !this.isActive
    if(this.isActive){
      this.formService.setSpecGoodsType("General cargo")
    }else{
      this.formService.setSpecGoodsType("Dangerous goods")
    }
  }
  ngOnInit(): void {
    if(this.specifications_select === "Dangerous goods"){
      this.isActive = false;
    }else{
      this.isActive = true
    }
    if(this.shipment_select === "Price"){
      this.isActiveShipment = false;
    }else{
      this.isActiveShipment = true
    }
    if(this.stackable_select === "No"){
      this.isActiveStackable = false;
    }else{
      this.isActiveStackable = true
    }
    
  }
  constructor(private http: HttpClient, private formService: FormService, private fb: FormBuilder, private homeComponent: QuotationComponent) {
    this._createForm();
    if(formService.getSpecLengthBoxes() > 1){
      for( let i = 1; i < this.width.length; i++){
        this.addTopParams();
      }
    }
  }
  private _createForm(){
    this.specificationsForm = this.fb.group({
      TotalQuantity:['', [
        Validators.required,
        Validators.pattern('^[0-9.]+$')
      ]],
      TotalWeight:['', [
        Validators.required,
        Validators.pattern('^[0-9.]+$')
      ]],
      Value:['', [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],
      Goods:['', [
        Validators.required
      ]],
      Width0: ['', Validators.required, asyncValidatorFunction],
      Length0: ['', Validators.required, asyncValidatorFunction],
      Height0: ['', Validators.required, asyncValidatorFunction],
      Quantity0: ['', Validators.required, asyncValidatorFunction,]
    })
  }

  

  getControl(index: number, controlName: string): AbstractControl{
      return this.specificationsForm.get(`${controlName}${index}`);
  }
  getControlOther(controlName: string): AbstractControl {
    return this.specificationsForm.get(`${controlName}`);
  }

  previousToSender(){
    this.homeComponent.setCurrencyForm("sender")
    this.saveForm()
  }
  submitSender(){
    this.saveForm()
    console.log("width: " + this.formService.getSpecBoxesWidth() + "; \nlength: " + this.formService.getSpecBoxesLength()+ "; \nheight: " + this.formService.getSpecBoxesHeight() + "; \nquantity: " + this.formService.getSpecBoxesQuantity());
    this.homeComponent.setCurrencyForm("date")
  } 
  saveForm(){
    this.formService.setSpecTotalQuantity(this.specificationsForm.value.TotalQuantity)
    this.formService.setSpecTotalWeight(this.specificationsForm.value.TotalWeight);
    this.formService.setSpecDescriptionGoods(this.specificationsForm.value.Goods)
    this.formService.setSpecTotalValue(this.specificationsForm.value.Value)
  }
  addTopParams(): void {
    this.boxes.push(this.formService.getSpecLengthBoxes());
    this.addToFormControl()
    this.formService.setSpecLengthBoxes(this.boxes.length)
  }
  removeTopParams(index: number): void {
    
    this.boxes.splice(index, 1);

    this.quantity.splice(index, 1)
    this.width.splice(index, 1)
    this.height.splice(index, 1)
    this.length.splice(index, 1)

    this.addToFormControl()
  }

  addToFormControl(){
    for(let i = 0; i < this.boxes.length; i++){
      this.specificationsForm.removeControl(`Width${i}`);
      this.specificationsForm.removeControl(`Height${i}`);
      this.specificationsForm.removeControl(`Length${i}`);
      this.specificationsForm.removeControl(`Quantity${i}`);
    };
    for(let i = 0; i < this.boxes.length; i++){
      this.specificationsForm.addControl(`Width${i}`, this.fb.control(this.width[i], [Validators.required], [asyncValidatorFunction]));
      this.specificationsForm.addControl(`Height${i}`, this.fb.control(this.height[i], [Validators.required], [asyncValidatorFunction]));
      this.specificationsForm.addControl(`Length${i}`, this.fb.control(this.length[i], [Validators.required], [asyncValidatorFunction]));
      this.specificationsForm.addControl(`Quantity${i}`, this.fb.control(this.quantity[i], [Validators.required], [asyncValidatorFunction]));
    };
    
  }
  selectValueBudget(str:string){
    this.formService.setSpecCurrency(str)
    this.valueBuget = this.formService.getSpecCurrency()
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
  }
}

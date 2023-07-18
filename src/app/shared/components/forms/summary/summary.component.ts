import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { QuotationControllerService } from 'src/app/shared/controller/quotation-controller.service';
import { HomeComponent } from 'src/app/shared/layout/home/home.component';
import { QuotationComponent } from 'src/app/shared/layout/home/layouts/quotation/quotation.component';
import { DueDate, QuotationRequest, Receiver, Sender, Specifications } from 'src/app/shared/module/interfaces';
import { FormService } from 'src/app/shared/service/form.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css', '../../../../media/app.media-mobile.css', '../../../../media/app.media-4K.css']
})
export class SummaryComponent {
  senderCompany = this.formService.getSenderCompany();
  senderCountry = this.formService.getSenderCountry();
  senderCity = this.formService.getSenderCity();
  senderPostal = this.formService.getSenderPostal();
  senderStreet = this.formService.getSenderStreet();
  senderPhone = this.formService.getSenderContacts();
  senderBudget= this.formService.getSenderBuget();
  senderCurrency = this.formService.getSenderCurrency();
  senderPhoneCode = this.formService.getSenderPhoneCode();

  specificationQuantity = this.formService.getSpecBoxesQuantity();
  specificationLenght = this.formService.getSpecBoxesLength();
  specificationWidth = this.formService.getSpecBoxesWidth();
  specificationHeight = this.formService.getSpecBoxesHeight();
  specificationTotalQuantity = this.formService.getSpecTotalQuantity();
  specificationTotalWeigh = this.formService.getSpecTotalWeight();
  specificationGoodsType = this.formService.getSpecGoodsType();
  specificationShipmentStackable = this.formService.getSpecIsStackable();
  specificationShipmentPriority = this.formService.getSpecPriorityShipment();
  specificationTotalValue = this.formService.getSpecTotalValue();
  specificationGoodsDescription = this.formService.getSpecDescriptionGoods();
  specificationCurrency = this.formService.getSpecCurrency();
 
  dateRealization = this.createDate(this.formService.getDateSelected());
  dateNote = this.formService.getDateDescription();

  receiverCompany = this.formService.getReceiverCompany();
  receiverCountry = this.formService.getReceiverCountry();
  receiverCity = this.formService.getReceiverCity();
  receiverPostal = this.formService.getReceiverPostal();
  receiverStreet = this.formService.getReceiverStreet();
  receiverPhone = this.formService.getReceiverContacts();
  receiverPhoneCode = this.formService.getReceiverPhoneCode()
  receiverEmailAdress= this.formService.getReceiverEmail();

  constructor(private controller: QuotationControllerService,private http: HttpClient, private fb: FormBuilder, private quotationComponent: QuotationComponent, private formService: FormService, private router:Router) {  }


  submitSender(){
    const sender: Sender = {
      name: this.senderCompany,
      street: this.senderStreet,
      city: this.senderCity,
      code: this.senderPostal,
      country: this.senderCountry,
      transportBudget: this.senderBudget + this.senderCurrency,
      phone: this.senderPhoneCode + this.senderPhone
    };

    const receiver: Receiver = {
      name: this.receiverCompany,
      street: this.receiverStreet,
      city: this.receiverCity,
      code: this.receiverPostal,
      country: this.receiverCountry,
      phone: this.receiverPhoneCode + this.receiverPhone,
      email: this.receiverEmailAdress
    };

    const specifications: Specifications = {
      quantityTotal: this.specificationTotalQuantity,
      weightTotal: this.specificationTotalWeigh,
      goodsType: this.specificationGoodsType,
      stackable: this.specificationShipmentStackable,
      priority: this.specificationShipmentPriority,
      valueTotal: this.specificationTotalValue + this.specificationCurrency,
      description: this.specificationGoodsDescription,
      quantity: this.specificationQuantity,
      width: this.specificationWidth,
      length: this.specificationLenght,
      height: this.specificationHeight
    };

    const dueDate: DueDate = {
      date: this.dateRealization,
      note: this.dateNote
    };

    const quotationRequest: QuotationRequest = {
      senderReq: sender,
      receiverReq: receiver,
      specificationsReqs: specifications,
      dueDateReq: dueDate
    };

    this.controller.submitQuotation(quotationRequest).subscribe(response => {
      this.router.navigate(['/'], {
        queryParams: {
          quote: true
        }
      })
    })


    this.formService.clearAll()
    this.quotationComponent.setCurrencyForm('sender')
  }
  previousStep(){
    this.quotationComponent.setCurrencyForm('receiver')
  }
  private _to2Git(n: number): string | any{
    return ('00' + n).slice(-2)
  }

  createDate(date:Date){
    return  date.getFullYear()+ '-' + this._to2Git(date.getMonth() + 1)+ "-" + this._to2Git(date.getDate()) ;
  }

}

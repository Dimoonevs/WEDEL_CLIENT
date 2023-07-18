import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class FormService{
    senderCity!: string;
    senderCountry!: string; 
    senderCurrency = "CZK";
    senderCompany!: string;
    senderPostal!:string;
    senderStreet!: string;
    senderContacts!: string;
    senderBuget!: string;
    senderPhoneCode = "+380";
    senderDigitCode = 9;

    setSenderDigitCode(num:number){
      this.senderDigitCode = num
    }
    getSenderDigitCode():number{
      return this.senderDigitCode;
    }
    setSenderPhoneCode(str:string){
      this.senderPhoneCode = str
    }
    getSenderPhoneCode():string{
      return this.senderPhoneCode;
    }
    setSenderCity(str: string){
      this.senderCity = str;
    }
    getSenderCity():string{
      return this.senderCity;
    }
    setSenderCountry(str:string){
      this.senderCountry = str;
    }
    getSenderCountry():string{
      return this.senderCountry;
    }
    setSenderCurrency(str:string){
      this.senderCurrency = str;
    }
    getSenderCurrency():string{
      return this.senderCurrency;
    }
    setSenderCompany(str:string){
      this.senderCompany = str;
    }
    getSenderCompany():string{
      return this.senderCompany;
    }
    setSenderPostal(str:string){
      this.senderPostal = str;
    }
    getSenderPostal():string{
      return this.senderPostal;
    }
    setSenderStreet(str:string){
      this.senderStreet = str;
    }
    getSenderStreet():string{
      return this.senderStreet;
    }
    setSenderContacts(str:string){
      this.senderContacts = str;
    }
    getSenderContacts():string{
      return this.senderContacts
    }
    setSenderBuget(str:string){
      this.senderBuget = str
    }
    getSenderBuget():string{
      return this.senderBuget;
    }


    specBoxesWidth: string[] = [];
    specBoxesLength: string[] = [];
    specBoxesHeight: string[] = [];
    specBoxesQuantity: string[] = [];
    specLengthBoxes = 1;
    specTotalQuantity!: string;
    specTotalWeight!: string;
    specDescriptionGoods!: string;
    specCurrency = "CZK";
    specGoodsType = "General cargo";
    isStackable = "No";
    specTotalValue!: string;
    specPriorityShipment = "Transit time"

    removeOfIndex(index:number){
      this.specBoxesHeight.slice(index, 1);
      this.specBoxesLength.slice(index, 1);
      this.specBoxesQuantity.slice(index, 1);
      this.specBoxesWidth.slice(index, 1);
    }
    
    setSpecBoxesWidth(str:string){
      this.specBoxesWidth.push(str);
    }
    getSpecBoxesWidth():string[]{
      return this.specBoxesWidth
    }
    setSpecBoxesLength(str:string){
      this.specBoxesLength.push(str);
    }
    getSpecBoxesLength():string[]{
      return this.specBoxesLength
    }
    setSpecBoxesHeight(str:string){
      this.specBoxesHeight.push(str);
    }
    getSpecBoxesHeight():string[]{
      return this.specBoxesHeight
    }
    setSpecLengthBoxes(num: number){
      this.specLengthBoxes = num
    }
    getSpecLengthBoxes():number{
      return this.specLengthBoxes;
    }
    setSpecBoxesQuantity(str: string){
      this.specBoxesQuantity.push(str);
    }
    getSpecBoxesQuantity():string[]{
      return this.specBoxesQuantity;
    }
    clearMass(){
      this.specBoxesWidth = []
      this.specBoxesHeight = []
      this.specBoxesLength = []
      this.specBoxesQuantity = []
    }
    setSpecTotalQuantity(str:string){
      this.specTotalQuantity = str;
    }
    getSpecTotalQuantity():string{
      return this.specTotalQuantity;
    }
    setSpecTotalWeight(str:string){
      this.specTotalWeight = str;
    }
    getSpecTotalWeight():string{
      return this.specTotalWeight;
    }
    setSpecDescriptionGoods(str:string){
      this.specDescriptionGoods = str;
    }
    getSpecDescriptionGoods():string{
      return this.specDescriptionGoods;
    }
    setSpecCurrency(str:string){
      this.specCurrency = str;
    }
    getSpecCurrency():string{
      return this.specCurrency;
    }
    setSpecGoodsType(str:string){
      this.specGoodsType = str;
    }
    getSpecGoodsType():string{
      return this.specGoodsType;
    }
    setSpecIsStackable(str:string){
      this.isStackable = str;
    }
    getSpecIsStackable():string{
      return this.isStackable;
    }
    setSpecTotalValue(str:string){
      this.specTotalValue = str;
    }
    getSpecTotalValue():string{
      return this.specTotalValue;
    }
    setSpecPriorityShipment(str:string){
      this.specPriorityShipment = str;
    }
    getSpecPriorityShipment():string{
      return this.specPriorityShipment;
    }


    dateSelected = new Date();
    dateDescription!: string; 

    setDateSelected(date: Date){
      this.dateSelected = date;
    }
    getDateSelected():Date{
      return this.dateSelected;
    }
    setDateDescription(str:string){
      this.dateDescription = str;
    }
    getDateDescription():string{
      return this.dateDescription
    }


    receiverCity!: string;
    receiverCountry!: string; 
    receiverCompany!: string;
    receiverPostal!:string;
    receiverStreet!: string;
    receiverContacts!: string;
    receiverEmail!: string;
    receiverPhoneCode = "+380"
    receiverDigitCode = 9

    getReceiverDigitCode():number{
      return this.receiverDigitCode;
    }
    setReceiverDigitCode(num:number){
      this.receiverDigitCode = num;
    }
    setReceiverPhoneCode(str:string){
      this.receiverPhoneCode = str
    }
    getReceiverPhoneCode():string{
      return this.receiverPhoneCode;
    }
    setReceiverCity(str: string){
      this.receiverCity = str;
    }
    getReceiverCity():string{
      return this.receiverCity;
    }
    setReceiverCountry(str:string){
      this.receiverCountry = str;
    }
    getReceiverCountry():string{
      return this.receiverCountry;
    }
    setReceiverCompany(str:string){
      this.receiverCompany = str;
    }
    getReceiverCompany():string{
      return this.receiverCompany;
    }
    setReceiverPostal(str:string){
      this.receiverPostal = str;
    }
    getReceiverPostal():string{
      return this.receiverPostal;
    }
    setReceiverStreet(str:string){
      this.receiverStreet = str;
    }
    getReceiverStreet():string{
      return this.receiverStreet;
    }
    setReceiverContacts(str:string){
      this.receiverContacts = str;
    }
    getReceiverContacts():string{
      return this.receiverContacts
    }
    setReceiverEmail(str:string){
      this.receiverEmail = str;
    }
    getReceiverEmail():string{
      return this.receiverEmail
    }


    allLink = "http://localhost:8080/api/v1/form/";
    getAllLink():string{
      return this.allLink;
    }


    clearAll(){
      this.senderCity = "";
      this.senderCountry = ""; 
      this.senderCurrency = "CZK";
      this.senderCompany = "";
      this.senderPostal = "";
      this.senderStreet = "";
      this.senderContacts = "";
      this.senderBuget = "";
      this.senderPhoneCode = "+380";
      this.senderDigitCode = 9;
      this.specBoxesWidth = [];
      this.specBoxesLength = [];
      this.specBoxesHeight = [];
      this.specBoxesQuantity = [];
      this.specLengthBoxes = 1;
      this.specTotalQuantity = "";
      this.specTotalWeight = "";
      this.specDescriptionGoods = "";
      this.specCurrency = "CZK";
      this.specGoodsType = "General cargo";
      this.isStackable = "No";
      this.specTotalValue = "";
      this.specPriorityShipment = "Transit time"
      this.dateSelected = new Date();
      this.dateDescription = ""; 
      this.receiverCity = "";
      this.receiverCountry = ""; 
      this.receiverCompany = "";
      this.receiverPostal = "";
      this.receiverStreet = "";
      this.receiverContacts = "";
      this.receiverEmail = "";
      this.receiverPhoneCode = "+380"
      this.receiverDigitCode = 9
    }


    requestACallPhoneCode = "+380"
    requestACallDigitCode = 9;

    getRequestACallPhoneCode():string{
      return this.requestACallPhoneCode;
    }
    setRequestACallPhoneCode(code:string){
      this.requestACallPhoneCode = code;
    }
    getRequestACallDigitCode():number{
      return this.requestACallDigitCode;
    }
    setRequestACallDigitCode(digitCode: number){
      this.requestACallDigitCode = digitCode;
    }

}
import { Component } from '@angular/core';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css','../../../../../media/app.media-mobile.css', '../../../../../media/app.media-4K.css']
})
export class QuotationComponent {
  currentForm = 'sender';

progress: NodeListOf<any> | any;
progressTextSpec: NodeListOf<any> | any;
progressTextSender: NodeListOf<any> | any;
progressTextData: NodeListOf<any> | any;
progressTextReceiver: NodeListOf<any> | any;

setCurrencyForm(data:string){
  this.currentForm = data
  this.addClassIfNeed()
 }

 addClassIfNeed(){
  this.progress = document.querySelector(".quotation_block_progress")
  this.progressTextSpec = document.querySelector(".quotation_block_progress_curcle_text-specifications")
  this.progressTextData = document.querySelector('.quotation_block_progress_curcle_text-data')
  this.progressTextSender = document.querySelector('.quotation_block_progress_curcle_text-sender')
  this.progressTextReceiver = document.querySelector('.quotation_block_progress_curcle_text-receiver')

  if(this.currentForm === "specifications" || this.currentForm === "data" || this.currentForm === "receiver" || this.currentForm === "summary" ){
    this.progress.classList.add("quotation_block_progress-done_sender")
    this.progressTextSpec.classList.add("quotation_block_progress_curcle_text_active")
  }else if(this.currentForm !== "specifications" && this.currentForm !== "data" && this.currentForm !== "receiver" && this.currentForm !== "summary" ){
    this.progress.classList.remove("quotation_block_progress-done_sender")
    this.progressTextSpec.classList.remove("quotation_block_progress_curcle_text_active")
  }

  if(this.currentForm === 'date' || this.currentForm === "receiver" || this.currentForm === "summary"  ){
    this.progress.classList.add("quotation_block_progress-done_specifications")
    this.progress.classList.add("quotation_block_progress-done_sender")
    this.progressTextSpec.classList.add("quotation_block_progress_curcle_text_active")
  }else if(this.currentForm !== 'date' && this.currentForm !== "receiver" && this.currentForm !== "summary"){
    this.progress.classList.remove("quotation_block_progress-done_specifications")
  }

  if(this.currentForm === "receiver" || this.currentForm === "summary" ){
    this.progress.classList.add("quotation_block_progress-done_sender")
    this.progress.classList.add("quotation_block_progress-done_specifications")
    this.progress.classList.add("quotation_block_progress-done_date")
  }else if(this.currentForm !== "receiver" && this.currentForm !== "summary"){
    this.progress.classList.remove("quotation_block_progress-done_date")
  }
  if(this.currentForm === "summary" ){
    this.progress.classList.add("quotation_block_progress-done_receiver")
  }else if( this.currentForm !== "summary") {
    this.progress.classList.remove("quotation_block_progress-done_receiver")
  }

 }



}

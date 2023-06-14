import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormService } from '../service/form.service';
import { Observable } from 'rxjs';
import { CountryAndCallingCodeReq, MessageQuestionReq, QuestionReq, QuotationRequest,  RequestACallReq,  SearchCountryReq } from '../module/interfaces';

@Injectable({
  providedIn: 'root'
})
export class QuotationControllerService {
  

  constructor(private http: HttpClient, private link: FormService) { }

  getAllCountryAndCallingCode():Observable<CountryAndCallingCodeReq>{
    return this.http.get<CountryAndCallingCodeReq>(this.link.getAllLink()+"get_all_country");
  }
  searchCountry(country: SearchCountryReq):Observable<CountryAndCallingCodeReq>{
    return this.http.post<CountryAndCallingCodeReq>(this.link.getAllLink() +"search_country", country)
  }


  submitQuotation(quotationRequest: QuotationRequest): Observable<any> {
    return this.http.post<any>(this.link.getAllLink()+"quotation_form", quotationRequest);
  }
  submitQueastionReq(requsetACallReq: QuestionReq): Observable<any>{
    return this.http.post<any>(this.link.getAllLink() + "request_a_question", requsetACallReq);
  }
  submitMessageQuestion(messageQuestionReq: MessageQuestionReq): Observable<any>{
    return this.http.post<any>(this.link.getAllLink() + "message_question", messageQuestionReq);
  }
  submitRequestACall(requestACall: RequestACallReq):Observable<any>{
    return this.http.post<any>(this.link.getAllLink() + "request_a_call", requestACall);
  }
}

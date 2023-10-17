import { Injectable } from "@angular/core";
import { CountryAndCallingCodeReq } from "src/app/shared/module/interfaces";
@Injectable({
    providedIn: 'root'
  })

export class EmmitationJson {
    countryAndCallingCodeReq!: CountryAndCallingCodeReq;

    ngOnInit(){
        this.countryAndCallingCodeReq
    }
}
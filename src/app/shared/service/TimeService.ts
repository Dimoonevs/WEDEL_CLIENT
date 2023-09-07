import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class TimeService {
  getCurrentHour(): number {
    return new Date().getHours();
  }
}
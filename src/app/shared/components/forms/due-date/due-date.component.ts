import { Component } from '@angular/core';
import { HomeComponent } from 'src/app/shared/layout/home/home.component';
import { FormService } from 'src/app/shared/service/form.service';

@Component({
  selector: 'app-due-date',
  templateUrl: './due-date.component.html',
  styleUrls: ['./due-date.component.css','../../../../media/app.media-mobile.css', '../../../../media/app.media-4K.css']
})
export class DueDateComponent {
  selected= this.formService.getDateSelected();
  description = this.formService.getDateDescription()
  currentMonth: Date;
  weekDays: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  calendar: { day: number | null, isCurrentDay: boolean, date: Date | null}[][] = [];
  selectedDate: Date | null = this.formService.getDateSelected(); ;
  monthForChoise: string[] =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  calendarChoise = false;

  ngOnInit(): void {
  }
  constructor(private homeComponent: HomeComponent, private formService: FormService) {
    this.currentMonth = new Date();
    this.generateCalendar();
  }

  private _to2Git(n: number): string | any{
    return ('00' + n).slice(-2)
  }
  selectDate(date: Date | null): void {
    this.selectedDate = date;
    // console.log(this.selectedDate?.getFullYear() + '-' + this._to2Git(this.selectedDate!.getMonth() + 1) + '-' + this._to2Git(this.selectedDate!.getDate()))
  }
  generateCalendar(): void {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const today = new Date();
    const lastDay = new Date(year, month + 1, 0);
    const numDays = lastDay.getDate();
  
    let currentDay = 1;
    this.calendar = [];
  
    for (let week = 0; week < 6; week++) {
      const days: { day: number | null, isCurrentDay: boolean, date: Date | null }[] = [];
  
      for (let i = 0; i < 7; i++) {
        if ((week === 0 && i < firstDay.getDay()) || currentDay > numDays) {
          days.push({ day: null, isCurrentDay: false, date: null});
        } else {
          const isCurrentDay = currentDay === today.getDate() && month === today.getMonth() && year === today.getFullYear();
          const date = new Date(year, month, currentDay);
          days.push({ day: currentDay, isCurrentDay, date });
          currentDay++;
        }
      }
  
      this.calendar.push(days);
      if (currentDay > numDays) {
        break;
      }
    }
  }

  previousStep(){
    this.homeComponent.setCurrencyForm('specifications')
    this.formService.setDateSelected(this.selected);
    this.formService.setDateDescription(this.description)
  }
  nextStep(){
    console.log(this.selectedDate?.getFullYear() + '-' + this._to2Git(this.selectedDate!.getMonth() + 1) + '-' + this._to2Git(this.selectedDate!.getDate()))
    this.homeComponent.setCurrencyForm('receiver')
    this.formService.setDateSelected(this.selectedDate!);
    this.formService.setDateDescription(this.description)
  }
  lessNowMinth(){
    const currentMonth = new Date()
    if(this.currentMonth > currentMonth){
      this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1);
      this.generateCalendar()
    }
  }
  nextNowMinth(){
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1);
    this.generateCalendar()
  }
  choiseMonth(i:number, y: number){
    const nowDate = new Date()
    const choiseMonth = new Date(y, i)
    if(choiseMonth > nowDate){
      this.currentMonth = choiseMonth
      this.changeCalendarChoise()
    }
  }
  changeCalendarChoise(){
    this.calendarChoise = !this.calendarChoise;
    this.generateCalendar()
  }
}

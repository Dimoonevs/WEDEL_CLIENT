import { Component } from '@angular/core';
import { QuotationComponent } from 'src/app/shared/layout/home/layouts/quotation/quotation.component';
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
  currentMonthOfString = "";
  weekDays: string[] = [$localize`Su`, $localize`Mo`, $localize`Tu`, $localize`We`, $localize`Th`, $localize`Fr`, $localize`Sa`];
  calendar: { day: number | null, isCurrentDay: boolean, date: Date | null}[][] = [];
  selectedDate: Date | null = null;
  monthForChoise: string[] =[$localize`Jan`, $localize`Feb`, $localize`Mar`, $localize`Apr`, $localize`May`, $localize`Jun`, $localize`Jul`, $localize`Aug`, $localize`Sept`, $localize`Oct`, $localize`Nov`, $localize`Dec`]
  calendarChoise = false;
  currentYer : any;

  ngOnInit(): void {
    this.selectMonthAndYers()
  }
  selectMonthAndYers(){
    let numMonth = this.currentMonth.getMonth() +1
    switch (numMonth) {
        case 1 :
          this.currentMonthOfString = this.monthForChoise[0];
          break;
        case 2 :
          this.currentMonthOfString = this.monthForChoise[1];
          break;
        case 3 :
          this.currentMonthOfString = this.monthForChoise[2];
          break;
        case 4 :
          this.currentMonthOfString = this.monthForChoise[3];
          break;
        case 5 :
          this.currentMonthOfString = this.monthForChoise[4];
          break;
        case 6 :
          this.currentMonthOfString = this.monthForChoise[5];
          break;
        case 7 :
          this.currentMonthOfString = this.monthForChoise[6];
          break;
        case 8 :
          this.currentMonthOfString = this.monthForChoise[7];
          break;
        case 9 :
          this.currentMonthOfString = this.monthForChoise[8];
          break;
        case 10 :
          this.currentMonthOfString = this.monthForChoise[9];
          break;
        case 11 :
          this.currentMonthOfString = this.monthForChoise[10];
          break;
        case 12 :
          this.currentMonthOfString = this.monthForChoise[11];
          break;
    }
    this.currentYer = this.currentMonth.getFullYear();
  }
  
  constructor(private homeComponent: QuotationComponent, private formService: FormService) {
    this.currentMonth = new Date();
    this.generateCalendar();
  }

  private _to2Git(n: number): string | any{
    return ('00' + n).slice(-2)
  }
  selectDate(date: Date | null): void {
    let currentDate = new Date()
    if (date != null && date >= currentDate) {
      this.selectedDate = date;
    }
    
    
    
  }
  generateCalendar(): void {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const today = new Date();
    const lastDay = new Date(year, month + 1, 0);
    const numDays = lastDay.getDate();

    this.selectedDate = this.formService.getDateSelected()

  
    let currentDay = 1;
    this.calendar = [];
  
    for (let week = 0; week < 6; week++) {
      const days: { day: number | null, isCurrentDay: boolean, date: Date | null}[] = [];
  
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

  // isWasSelected(date:Date | null): boolean{
  //   if(new Date != this.formService.getDateSelected() && this.formService.getDateSelected() == date && date != null){
  //     return true;
  //   }
  //   return false;
  // }

  previousStep(){
    this.homeComponent.setCurrencyForm('specifications')
    this.formService.setDateSelected(this.selected);
    this.formService.setDateDescription(this.description)
  }
  nextStep(){
    
    // console.log(this.selectedDate?.getFullYear() + '-' + this._to2Git(this.selectedDate!.getMonth() + 1) + '-' + this._to2Git(this.selectedDate!.getDate()))
    this.formService.scrollTop()
    this.homeComponent.setCurrencyForm('receiver')
    this.formService.setDateSelected(this.selectedDate!);
    this.formService.setDateDescription(this.description)
  }
  lessNowMinth(){
    const currentMonth = new Date()
    if(this.currentMonth > currentMonth){
      this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1);
      this.generateCalendar()
      this.selectMonthAndYers()
    }
  }
  nextNowMinth(){
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1);
    this.generateCalendar()
    this.selectMonthAndYers()
  }
  choiseMonth(i:number, y: number){
    const nowDate = new Date()
    const choiseMonth = new Date(y, i)
    // console.log(nowDate.getMonth())
    // console.log(choiseMonth.getMonth())
    // console.log(nowDate.getFullYear())
    // console.log(choiseMonth.getFullYear())
    // let oneMonth = new Date(0, 1, 0, 0, 0, 0, 0)
    nowDate.setMonth(nowDate.getMonth() - 1)
    
    if(choiseMonth > nowDate){
      this.currentMonth = choiseMonth
      this.changeCalendarChoise()
    }
    this.selectMonthAndYers()
  }
  changeCalendarChoise(){
    this.calendarChoise = !this.calendarChoise;
    this.generateCalendar()
  }
}

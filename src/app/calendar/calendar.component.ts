import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { cmsAnimations } from '../animations/animations.js';
import './lunarcalendar.js';

type moralStatus = 'none' | 'create'

type checkStatus = { fill: string, status: string };

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  animations: [cmsAnimations]
})
export class CalendarComponent implements OnInit {

  checkStatus: checkStatus[] = [
    {
      fill: '#818CF8',
      status: '연차사용' 
    },
    {
      fill: '#78716C',
      status: '병가사용' 
    },
    {
      fill: '#34D399',
      status: '출근완료' 
    },
    {
      fill: '#F87171',
      status: '지각발생' 
    }
  ]

  test: string = 'test';
  week: string[] = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ]

  todayindex: number = 0;
  checkdaystatus: number[] = [];

  moralStatus: moralStatus = 'none';

  Year: number = 0;
  Month: number = 0;
  BeforeYear: number = 0;
  BeforeMonth: number = 0;
  DayInWeeks: number = 0;
  BeforeMonthEndday: number = 0;
  DaysInBeforeMonth: number[][] = [];
  DaysInMonth: number[][] = [];
  DaysInNextMonth: number[][] = [];
  UserName?: string = '';
  UserId: number = 1;
  
  Today = new Date();
  todayDate = this.Today.getDate();

  listAttendanceChecks: any[] = [];
  fulllistAttendanceChecks: any[] = [];

  constructor(
    // private calendarService: CalendarService,
  ) { }

  ngOnInit(): void {
    this.calendar(dayjs().year(), dayjs().month());
  }


  calendar(selectYear: number, selectMonth: number){
    this.DaysInBeforeMonth = [];
    this.DaysInMonth = [];
    this.DaysInNextMonth = [];
    this.Year = selectYear;
    this.Month = selectMonth;
    if(this.Month === -1) {
      this.Month = 11;
      this.Year--;
    }
    else if(this.Month === 12) {
      this.Month = 0;
      this.Year++;
    }
    this.BeforeYear = dayjs(new Date(selectYear, this.Month)).subtract(1, 'month').year();
    this.BeforeMonth = dayjs(new Date(selectYear, this.Month)).subtract(1, 'month').month();
    this.BeforeMonthEndday = dayjs(new Date(selectYear, this.Month)).subtract(1, 'month').daysInMonth();
    this.DayInWeeks = dayjs(new Date(selectYear, this.Month, 1)).day();
    
    for (let i = this.DayInWeeks; i > 0; i--) {
      this.DaysInBeforeMonth.push([this.BeforeMonthEndday - i + 1, this.DayInWeeks - i]);
    }
    for(let i = 1; i <= dayjs(new Date(selectYear, this.Month)).daysInMonth(); i++){
      this.DaysInMonth.push([i, dayjs(new Date(selectYear, this.Month, i)).day()]);
    }
    for(let i = 1; i <= 6 - dayjs(new Date(selectYear, this.Month, dayjs(new Date(selectYear, this.Month)).daysInMonth())).day(); i++){
      this.DaysInNextMonth.push([i, dayjs(new Date(selectYear, this.Month + 1, i)).day()]);
    }
  }

  getBeforeMonthCalendar(selectYear: number, selectMonth: number) {
    if(selectMonth === -1) {
      selectMonth = 11;
      selectYear--;
    }
    this.calendar(selectYear, selectMonth);
  }

  getNextMonthCalendar(selectYear: number, selectMonth: number) {
    if(selectMonth === 12) {
      selectMonth = 0;
      selectYear++;
    }
    this.calendar(selectYear, selectMonth);
  }
}

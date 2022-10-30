import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import './lunarcalendar.js';

type moralStatus = 'none' | 'create'

type checkStatus = { fill: string, status: string };

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
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

  selectedYear: number = 0;
  selectedMonth: number = 0;
  selectedBeforeYear: number = 0;
  selectedBeforeMonth: number = 0;
  selectedDayInWeeks: number = 0;
  selectedBeforeMonthEndday: number = 0;
  selectedDaysInBeforeMonth: number[][] = [];
  selectedDaysInMonth: number[][] = [];
  selectedDaysInNextMonth: number[][] = [];
  selectedUserName?: string = '';
  selectedUserId: number = 1;
  
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
    this.selectedDaysInBeforeMonth = [];
    this.selectedDaysInMonth = [];
    this.selectedDaysInNextMonth = [];
    this.selectedYear = selectYear;
    this.selectedMonth = selectMonth;
    if(this.selectedMonth === -1) {
      this.selectedMonth = 11;
      this.selectedYear--;
    }
    else if(this.selectedMonth === 12) {
      this.selectedMonth = 0;
      this.selectedYear++;
    }
    this.selectedBeforeYear = dayjs(new Date(selectYear, this.selectedMonth)).subtract(1, 'month').year();
    this.selectedBeforeMonth = dayjs(new Date(selectYear, this.selectedMonth)).subtract(1, 'month').month();
    this.selectedBeforeMonthEndday = dayjs(new Date(selectYear, this.selectedMonth)).subtract(1, 'month').daysInMonth();
    this.selectedDayInWeeks = dayjs(new Date(selectYear, this.selectedMonth, 1)).day();
    
    for (let i = this.selectedDayInWeeks; i > 0; i--) {
      this.selectedDaysInBeforeMonth.push([this.selectedBeforeMonthEndday - i + 1, this.selectedDayInWeeks - i]);
    }
    for(let i = 1; i <= dayjs(new Date(selectYear, this.selectedMonth)).daysInMonth(); i++){
      this.selectedDaysInMonth.push([i, dayjs(new Date(selectYear, this.selectedMonth, i)).day()]);
    }
    for(let i = 1; i <= 6 - dayjs(new Date(selectYear, this.selectedMonth, dayjs(new Date(selectYear, this.selectedMonth)).daysInMonth())).day(); i++){
      this.selectedDaysInNextMonth.push([i, dayjs(new Date(selectYear, this.selectedMonth + 1, i)).day()]);
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

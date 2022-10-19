import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import './lunarcalendar.js';

type moralStatus = 'none' | 'create'


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

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

  listAttendanceChecks: ICalendarDTO.Response.Calendar[] = [];
  fulllistAttendanceChecks: ICalendarDTO.Response.Calendar[] = [];
  listEmployee: IEmployeeDTO.Response.Employee[] = [];

  constructor(
    // private calendarService: CalendarService,
    // private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.calendar(dayjs().year(), dayjs().month());
    // this.employeeService.getEmployees().subscribe((employees) => {
    //   this.listEmployee = employees;
    //   this.selectedUserName = this.listEmployee.find(employee => { return employee.id === this.selectedUserId })?.name;
    //   this.getcalendarAttendance(dayjs().year(), dayjs().month() + 1); 
    // }); 
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

  // getcalendarAttendance(selectYear: number, selectMonth: number) {   
  //     this.checkdaystatus = [];      
  //     this.calendarService.getSortCalendars(selectYear.toString(), `${selectMonth<10?'0':''}${selectMonth.toString()}`, this.selectedUserId).subscribe((calendars) => {
  //       console.log(calendars);
  //       this.listAttendanceChecks = calendars.sort(function (a, b) {
  //         if(parseInt(a.date.substring(8,10)) > parseInt(b.date.substring(8,10))) return 1;
  //         else if(parseInt(a.date.substring(8,10)) < parseInt(b.date.substring(8,10))) return -1;
  //         else return 0;
  //       });
  //       for (let i = 0; i < this.listAttendanceChecks.length; i++) {
  //         this.checkdaystatus[parseInt(this.listAttendanceChecks[i].date.substring(8,10))] = this.listAttendanceChecks[i].status;
  //       }
  //     });
  // }

  // getCalendarDate(day: number) {
  //     this.calendarService.getSortCalendars(this.selectedYear.toString(), `${this.selectedMonth<10?'0':''}${(this.selectedMonth + 1).toString()}`, this.selectedUserId).subscribe((calendars) => {
  //       this.listAttendanceChecks = calendars.filter(calendar => calendar.date === `${this.selectedYear}-${this.selectedMonth<10?'0':''}${this.selectedMonth + 1}-${day<10?'0':''}${day}`);
  //     }); 
  // }

  getBeforeMonthCalendar(selectYear: number, selectMonth: number) {
    if(selectMonth === -1) {
      selectMonth = 11;
      selectYear--;
    }
    this.calendar(selectYear, selectMonth);
    // this.getcalendarAttendance(selectYear, selectMonth + 1);
  }

  getNextMonthCalendar(selectYear: number, selectMonth: number) {
    if(selectMonth === 12) {
      selectMonth = 0;
      selectYear++;
    }
    this.calendar(selectYear, selectMonth);
    // this.getcalendarAttendance(selectYear, selectMonth + 1);
  }
}

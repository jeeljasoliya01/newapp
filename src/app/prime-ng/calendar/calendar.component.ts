import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  date1: Date = new Date()
  values1: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

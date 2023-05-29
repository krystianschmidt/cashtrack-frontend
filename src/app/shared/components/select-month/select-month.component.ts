import {Component, EventEmitter, OnInit, Output} from '@angular/core';

interface Month {
  value: number;
  name: string;
}

@Component({
  selector: 'select-month',
  templateUrl: './select-month.component.html',
  styleUrls: ['./select-month.component.scss'],
})
export class SelectMonthComponent  implements OnInit {
  @Output() monthChanged: EventEmitter<number> = new EventEmitter<number>();

  selectedMonth: number;

  months: Month[] = [
    {value: 1, name: 'January'},
    {value: 2, name: 'February'},
    {value: 3, name: 'March'},
    {value: 4, name: 'April'},
    {value: 5, name: 'May'},
    {value: 6, name: 'June'},
    {value: 7, name: 'July'},
    {value: 8, name: 'August'},
    {value: 9, name: 'September'},
    {value: 10, name: 'October'},
    {value: 11, name: 'November'},
    {value: 12, name: 'December'},
  ];

  constructor() {
    this.selectedMonth = new Date().getMonth()+1;
  }

  ngOnInit() {
    this.monthChanged.emit(this.selectedMonth);
  }

  onMonthChange() {
    this.monthChanged.emit(this.selectedMonth);
  }
}

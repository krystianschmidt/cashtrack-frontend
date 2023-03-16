import {Component, OnInit} from '@angular/core';

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
  selectedMonth: number;
  months: Month[] = [
    { value: 0, name: 'January' },
    { value: 1, name: 'February' },
    { value: 2, name: 'March' },
    { value: 3, name: 'April' },
    { value: 4, name: 'May' },
    { value: 5, name: 'June' },
    { value: 6, name: 'July' },
    { value: 7, name: 'August' },
    { value: 8, name: 'September' },
    { value: 9, name: 'October' },
    { value: 10, name: 'November' },
    { value: 11, name: 'December' },
  ];

  constructor() {
    this.selectedMonth = new Date().getMonth();
  }

  ngOnInit() {}
}

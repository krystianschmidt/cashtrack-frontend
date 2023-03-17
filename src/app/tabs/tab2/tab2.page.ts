import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  selectedMonth: number;

  constructor() {
    this.selectedMonth = new Date().getMonth();
  }

  onMonthChanged(selectedMonth: number) {
    this.selectedMonth = selectedMonth;
    console.log(selectedMonth + "selected month tab 1")
  }
}

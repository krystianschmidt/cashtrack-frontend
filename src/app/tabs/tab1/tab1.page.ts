import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  selectedMonth: number;


  constructor() {
    this.selectedMonth = new Date().getMonth();
  }

  onMonthChanged(selectedMonth: number) {
    this.selectedMonth = selectedMonth;
    console.log(selectedMonth + "selected month tab 1")
  }

}

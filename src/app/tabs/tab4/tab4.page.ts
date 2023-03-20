import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  selectedMonth: number;

  ngOnInit() {
  }

  constructor() {
    this.selectedMonth = new Date().getMonth();
  }

  onMonthChanged(selectedMonth: number) {
    this.selectedMonth = selectedMonth;
  }

}

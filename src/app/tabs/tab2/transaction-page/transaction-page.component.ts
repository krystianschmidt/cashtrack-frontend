import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.scss'],
})
export class TransactionPageComponent  implements OnInit {
  @Input() selectedMonth: number;

  constructor() {
    this.selectedMonth = new Date().getMonth();
  }

  ngOnInit() {}

}

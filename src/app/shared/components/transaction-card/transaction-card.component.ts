import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from "./transaction-card.model";

@Component({
  selector: 'transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss'],
})
export class TransactionCardComponent  implements OnInit {

  @Input() transaction?: Transaction;

  constructor() { }

  ngOnInit() {}

  getAmountColor() {
    if (this.transaction) {
      return this.transaction.amount >= 0 ? 'success' : 'danger';
    }
    return '';
  }

  formatDate(date?: Date) {
    if (!date) {
      return '';
    }
    const options: Intl.DateTimeFormatOptions = {hour: '2-digit', minute: '2-digit' };
    return new Intl.DateTimeFormat('de-DE', options).format(date);
  }


}

import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TransactionListComponent} from "../../../shared/components/transaction-list/transaction-list.component";
import {Filter} from "../components/filter-transaction-list/filter-transaction-list.model";

@Component({
  selector: 'transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.scss'],
})
export class TransactionPageComponent  implements OnInit {
  @Input() selectedMonth: number;
  @Input() filter: Filter = {
    filterBy: 'all',
    sortBy: 'newest',
    category: null,
  };


  constructor() {
    this.selectedMonth = new Date().getMonth();
  }

  ngOnInit() {}

}

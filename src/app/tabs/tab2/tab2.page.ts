import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {TransactionPageComponent} from "./transaction-page/transaction-page.component";
import {Filter} from "./components/filter-transaction-list/filter-transaction-list.model";
import {FilterTransactionListComponent} from "./components/filter-transaction-list/filter-transaction-list.component";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild(FilterTransactionListComponent) filterTransactionList!: FilterTransactionListComponent;
  selectedMonth: number;
  filter: Filter = {
    filterBy: 'all',
    sortBy: 'newest',
    category: null,
  };

  constructor() {
    this.selectedMonth = new Date().getMonth();

  }

  onMonthChanged(selectedMonth: number) {
    this.selectedMonth = selectedMonth;
  }

  onFilterApplied(filter: Filter) {
    this.filter = filter;
  }

  openFilterModal() {
    this.filterTransactionList.openModal();
  }

}

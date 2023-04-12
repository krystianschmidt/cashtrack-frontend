import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TransactionListComponent} from "../../../shared/components/transaction-list/transaction-list.component";
import {Filter} from "../components/filter-transaction-list/filter-transaction-list.model";
import {TransactionsService} from "../../../services/transactions/transactions.service";
import {Transaction} from "../../../shared/components/transaction-list/transaction-card/transaction-card.model";

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

  transactions: Transaction[] = [];


  constructor(public transactionService: TransactionsService) {
    this.selectedMonth = new Date().getMonth();
  }

  async ngOnInit() {
    this.transactionService.getTransactions();
    this.transactionService.transactions$.subscribe(val => {
      this.transactions = val;
      console.log(val)
    })
  }
}


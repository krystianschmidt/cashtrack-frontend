import {Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { Transaction } from "../transaction-card/transaction-card.model";
import { exampleData } from "../../../example-data/transaction-card";
import {Filter} from "../../../tabs/tab2/components/filter-transaction-list/filter-transaction-list.model";

interface TransactionGroup {
  date: Date;
  transactions: Transaction[];
}

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnInit {
  @Input() selectedMonth: number;
  @Input() filter: Filter = {
    filterBy: 'all',
    sortBy: 'newest',
    category: null,
  };

  transactionGroups: TransactionGroup[] = [];
  unfilteredTransactions: Transaction[] = [];

  constructor() {
    this.selectedMonth = new Date().getMonth();
  }

  ngOnInit() {
    // TODO: exampleData mit service ersetzen
    this.unfilteredTransactions = exampleData;
    this.transactionGroups = this.groupTransactionsByDate(this.unfilteredTransactions);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedMonth'] || changes['filter']) {
      this.transactionGroups = this.groupTransactionsByDate(this.unfilteredTransactions);
      this.applyFilter();
    }
  }

  applyFilter() {
    let filteredTransactions = [...this.unfilteredTransactions];

    // Filter by type (income or expense)
    if (this.filter.filterBy === 'income') {
      filteredTransactions = filteredTransactions.filter(transaction => transaction.amount > 0);
    } else if (this.filter.filterBy === 'expense') {
      filteredTransactions = filteredTransactions.filter(transaction => transaction.amount < 0);
    }

    // Sort transactions
    if (this.filter.sortBy === 'highest') {
      filteredTransactions.sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount));
    } else if (this.filter.sortBy === 'lowest') {
      filteredTransactions.sort((a, b) => Math.abs(a.amount) - Math.abs(b.amount));
    } else if (this.filter.sortBy === 'newest') {
      filteredTransactions.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    } else if (this.filter.sortBy === 'oldest') {
      filteredTransactions.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
    }
    console.log("Filter:", this.filter);
    console.log("Filtered transactions:", filteredTransactions);

    // Group transactions by date

    if (this.filter.sortBy === 'highest' || this.filter.sortBy === 'lowest') {
      // When sorting by highest expenses, don't group transactions
      this.transactionGroups = filteredTransactions.map(transaction => ({ date: new Date(transaction.timestamp), transactions: [transaction] }));
    } else {
      this.transactionGroups = this.groupTransactionsByDate(filteredTransactions);
    }  }

  groupTransactionsByDate(transactions: Transaction[]): TransactionGroup[] {
    const groups: TransactionGroup[] = [];

    transactions = transactions.filter(transaction => new Date(transaction.timestamp).getMonth() === this.selectedMonth);

    if(this.filter.sortBy === 'newest')
      // Sort the transactions by date in descending order
      transactions.sort((a, b) => {
        if (a.timestamp > b.timestamp) {
          return -1;
        } else if (a.timestamp < b.timestamp) {
          return 1;
        } else {
          return 0;
        }
      });

    transactions.forEach((transaction) => {
      const date = new Date(transaction.timestamp);
      date.setHours(0, 0, 0, 0); // Remove time from date

      const groupIndex = groups.findIndex((group) => group.date.getTime() === date.getTime());

      if (groupIndex !== -1) {
        groups[groupIndex].transactions.push(transaction);
      } else {
        groups.push({ date, transactions: [transaction] });
      }
    });

    return groups;
  }

  formatDate(date: Date) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    today.setHours(0, 0, 0, 0);
    yesterday.setHours(0, 0, 0, 0);

    if (date.getTime() === today.getTime()) {
      return 'Today';
    } else if (date.getTime() === yesterday.getTime()) {
      return 'Yesterday';
    } else {
      const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return new Intl.DateTimeFormat('de-DE', options).format(date);
    }
  }


  loadMoreTransactions(event: Event) {
    setTimeout(() => {
      // Load more transactions here and add them to the transactionGroups array

      const infiniteScrollElement = event.target as HTMLIonInfiniteScrollElement;
      infiniteScrollElement.complete().then(r => { }); // Mark the infinite scroll as complete
    }, 1000);
  }

}

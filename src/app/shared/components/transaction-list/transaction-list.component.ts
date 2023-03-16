import { Component, OnInit } from '@angular/core';
import { Transaction } from "../transaction-card/transaction-card.model";
import { exampleData } from "../../../example-data/transaction-card";

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

  transactionGroups: TransactionGroup[] = [];

  constructor() { }

  ngOnInit() {
    this.transactionGroups = this.groupTransactionsByDate(exampleData);
    console.log('transactionGroups:', this.transactionGroups);
  }

  groupTransactionsByDate(transactions: Transaction[]): TransactionGroup[] {
    const groups: TransactionGroup[] = [];

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

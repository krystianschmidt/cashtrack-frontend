import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {InfiniteScrollCustomEvent, IonInfiniteScroll} from "@ionic/angular";
import {exampleData} from "../../../example-data/transaction-card";
import {TransactionsService} from "../../../services/transactions/transactions.service";
import {Transaction} from "../../../shared/components/transaction-list/transaction-card/transaction-card.model";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  @Input() selectedMonth: number;
  transactions: Transaction[] = [];

  async ngOnInit() {
    this.transactionService.getTransactions();
    this.transactionService.transactions$.subscribe(val => {
      this.transactions = val;
      console.log(val)
    })
  }


  constructor(public transactionService: TransactionsService) {
    this.selectedMonth = new Date().getMonth();
  }

}

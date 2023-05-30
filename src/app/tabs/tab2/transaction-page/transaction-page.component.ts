import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TransactionListComponent} from "../../../shared/components/transaction-list/transaction-list.component";
import {Filter} from "../components/filter-transaction-list/filter-transaction-list.model";
import {TransactionsService} from "../../../services/transactions/transactions.service";
import {Transaction} from "../../../shared/components/transaction-list/transaction-card/transaction-card.model";
import {IonModal} from "@ionic/angular";

@Component({
  selector: 'transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.scss'],
})
export class TransactionPageComponent  implements OnInit {
  private _selectedMonth: number;
  @ViewChild(IonModal) modal!: IonModal;

  @Input() set selectedMonth(value: number){
    this._selectedMonth = value;

    this.transactionService.getTransactions(this._selectedMonth, new Date().getFullYear());
    this.transactionService.transactions$.subscribe(val => {
      this.transactions = val;
      console.log(val)
    })
  }

  get selectedMonth(){
    return this._selectedMonth;
  }

  @Input() filter: Filter = {
    filterBy: 'all',
    sortBy: 'newest',
    category: null,
  };

  transactions: Transaction[] = [];


  constructor(public transactionService: TransactionsService) {
    this._selectedMonth = new Date().getMonth()+1;
  }

  async ngOnInit() {

  }


  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
}


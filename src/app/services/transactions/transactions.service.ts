import { Injectable } from '@angular/core';
import {Transaction} from "../../shared/components/transaction-list/transaction-card/transaction-card.model";
import {BehaviorSubject, firstValueFrom, of} from "rxjs";
import {exampleData} from "../../example-data/transaction-card";

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private transactions: Transaction[] = [];
  private transactionsSubject = new BehaviorSubject<Transaction[]>(this.transactions);

  transactions$ = this.transactionsSubject.asObservable();

  constructor() { }

  getTransactions(){
    // TODO: erstezen mit datenbank abfrage über backend
    return firstValueFrom(of(exampleData)).then(transactions=>{
      this.transactions = transactions;
      this.transactionsSubject.next(transactions);
    })
  }

  addTransaction(transaction: Transaction): void {
    this.transactions = [...this.transactions, transaction];
    this.transactionsSubject.next(this.transactions);
    console.log("Service: ", transaction)
  }
}

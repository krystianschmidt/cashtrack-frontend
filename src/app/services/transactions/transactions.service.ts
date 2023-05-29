import { Injectable } from '@angular/core';
import {Transaction} from "../../shared/components/transaction-list/transaction-card/transaction-card.model";
import {BehaviorSubject, firstValueFrom, of} from "rxjs";
import {exampleData} from "../../example-data/transaction-card";
import {CommunicationRequestService} from "../lib/communication-request.service";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TransactionsService extends CommunicationRequestService<any>{

  protected readonly backendUrlExt: string = 'transaction';

  public monthAndYear = {month: 0, year: 0};


  private transactions: Transaction[] = [];
  private transactionsSubject = new BehaviorSubject<Transaction[]>(this.transactions);

  transactions$ = this.transactionsSubject.asObservable();


  getTransactions(month: number, year: number): Promise<Transaction[]> {
    this.monthAndYear = {month: month, year: year};

    return super.sendGetRequest<Transaction[]>(this.backendUrlExt, {month: month, year: year}).then(transactions => {
      transactions.forEach(t => {
        t.timestamp = new Date(t.timestamp)
      })
      this.transactions = transactions;
      this.transactionsSubject.next(transactions);
      return transactions;
    })
  }

  addTransaction(transaction: Transaction): Promise<any> {
    this.transactionsSubject.next(this.transactions);

    console.log("Service: ", transaction)
    return super.sendPostRequest(this.backendUrlExt, transaction).then(() => {
      this.getTransactions(this.monthAndYear.month, this.monthAndYear.year)
    });
  }

  deleteTransaction(id: string){
    return super.sendDeleteRequest(this.backendUrlExt + `/${id}`).then(() => {
      this.getTransactions(this.monthAndYear.month, this.monthAndYear.year)
    });
  }

  protected prepareRequestObjectParameter(reqParameter: any): HttpParams {
    if (reqParameter.year && reqParameter.month) {
      return new HttpParams().set('year', reqParameter.year).set('month', reqParameter.month);
    }

    return new HttpParams();
  }
}

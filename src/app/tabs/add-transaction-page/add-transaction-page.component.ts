import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IonModal, ModalController} from "@ionic/angular";
import {Transaction} from "../../shared/components/transaction-list/transaction-card/transaction-card.model";
import {TransactionsService} from "../../services/transactions/transactions.service";

@Component({
  selector: 'add-transaction-page',
  templateUrl: './add-transaction-page.component.html',
  styleUrls: ['./add-transaction-page.component.scss'],
})
export class AddTransactionPageComponent  implements OnInit {

  category!: string;
  amount!: number;
  description!: string;
  isExpense = false;

  constructor(private modalCtrl: ModalController, private transactionService: TransactionsService) {}

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    const newTransaction: Transaction = this.createTransaction();
    this.transactionService.addTransaction(newTransaction);
    return this.modalCtrl.dismiss({ transaction: newTransaction }, 'confirm');
  }



  createTransaction(): Transaction {
    // Define the transaction object based on the input values from the form
    const transaction: Transaction = {
      id: this.generateID(),
      category: this.category,
      icon: '', // You need to determine how to set the icon based on the category
      description: this.description,
      amount: this.isExpense ? -this.amount : this.amount,
      timestamp: new Date(),
    };
    return transaction;
  }

  // Helper function to generate a random ID
  generateID(): string {
    return Math.random().toString(36).substr(2, 9);
  }

}

import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IonModal, ModalController} from "@ionic/angular";
import {Transaction} from "../../shared/components/transaction-list/transaction-card/transaction-card.model";
import {TransactionsService} from "../../services/transactions/transactions.service";
import {Category} from "../tab5/components/profile-list/categorys-modal/categorys-modal.model";
import {IAmService} from "../../services/authentification/i-am.service";
import {CategorysService} from "../../services/categories/categorys.service";

@Component({
  selector: 'add-transaction-page',
  templateUrl: './add-transaction-page.component.html',
  styleUrls: ['./add-transaction-page.component.scss'],
})
export class AddTransactionPageComponent  implements OnInit {

  category: Category = {
    label: '',
    iconName: '',
    color:''
  };
  amount!: number;
  description!: string;
  isExpense = false;

  categories: Category[] = [];

  constructor(private modalCtrl: ModalController,
              private transactionService: TransactionsService,
              private categorysService: CategorysService) {}

  ngOnInit(){
    this.categorysService.categories$.subscribe(categories => {
      this.categories = categories;
    })
    if(this.categorysService.categories && this.categorysService.categories.length > 0){
      this.categories = this.categorysService.categories;
    }else{
      this.categorysService.getCategories();
    }
  }

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

  addCategory(e: any) {
    console.log(e)
    this.category = e.detail.value;
  }
}

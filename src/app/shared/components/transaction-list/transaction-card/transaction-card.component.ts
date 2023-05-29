import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Transaction} from "./transaction-card.model";
import {TransactionDetailComponent} from "./transaction-detail/transaction-detail.component";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss'],
})
export class TransactionCardComponent  implements OnInit {

  @Input() transaction!: Transaction;
  @Output() transactionDeleted = new EventEmitter<string>();

  constructor(private modalController: ModalController) {
  }

  ngOnInit() {
  }

  getAmountColor() {
    if (this.transaction) {
      return this.transaction.amount >= 0 ? 'success' : 'danger';
    }
    return '';
  }

  formatDate(date?: Date) {
    if (!date) {
      return '';
    }
    const options: Intl.DateTimeFormatOptions = {hour: '2-digit', minute: '2-digit'};
    return new Intl.DateTimeFormat('de-DE', options).format(date);
  }

  async openTransactionDetails() {
    const modal = await this.modalController.create({
      component: TransactionDetailComponent,
      componentProps: {
        transaction: this.transaction,
      },
    });

    // Listen for the deleteTransaction event
    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.transactionId) {
        // Emit the transactionDeleted event when the deleteTransaction event is triggered
        this.transactionDeleted.emit(result.data.transactionId);
      }
    });

    return await modal.present();
  }
}

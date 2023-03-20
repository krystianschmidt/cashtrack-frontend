import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Transaction} from "../transaction-card.model";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
})
export class TransactionDetailComponent  implements OnInit {
  @Input() transaction!: Transaction;
  @Output() deleteTransaction = new EventEmitter<string>();

  public editMode = false;

  toggleEditMode() {
    this.editMode = !this.editMode;
  }


  constructor(private modalCtrl: ModalController) {}

  get isExpense(): boolean {
    return this.transaction.amount < 0;
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  onDeleteTransaction() {
    this.deleteTransaction.emit(this.transaction.id);
  }

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {IonModal, ModalController} from "@ionic/angular";

@Component({
  selector: 'add-transaction-page',
  templateUrl: './add-transaction-page.component.html',
  styleUrls: ['./add-transaction-page.component.scss'],
})
export class AddTransactionPageComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) {}

  isExpense = false;

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(null, 'confirm');
  }

  ngOnInit() {}

}

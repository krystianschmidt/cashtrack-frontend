//currency-modal.component.ts
import {Component, Input, OnInit} from '@angular/core';
import {IonRouterOutlet, ModalController} from "@ionic/angular";

@Component({
  selector: 'currency-modal',
  templateUrl: './currency-modal.component.html',
  styleUrls: ['./currency-modal.component.scss'],
})
export class CurrencyModalComponent  implements OnInit {
  selectedCurrency: string = "Euro";

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {}

  selectCurrency(currency: string) {
    this.selectedCurrency = currency;
    this.modalCtrl.dismiss({ selectedCurrency: this.selectedCurrency });
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}

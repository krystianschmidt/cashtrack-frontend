import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'categorys-modal',
  templateUrl: './categorys-modal.component.html',
  styleUrls: ['./categorys-modal.component.scss'],
})
export class CategorysModalComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}

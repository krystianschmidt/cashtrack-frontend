import {Component, Input, OnInit} from '@angular/core';
import {IonRouterOutlet, ModalController, NavController} from "@ionic/angular";

@Component({
  selector: 'export-data-modal',
  templateUrl: './export-data-modal.component.html',
  styleUrls: ['./export-data-modal.component.scss'],
})
export class ExportDataModalComponent  implements OnInit {

  @Input() routerOutlet!: IonRouterOutlet;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}

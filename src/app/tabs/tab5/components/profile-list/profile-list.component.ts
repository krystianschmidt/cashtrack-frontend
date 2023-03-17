import { Component, OnInit } from '@angular/core';
import {IonRouterOutlet, ModalController, NavController} from "@ionic/angular";
import {NavLinkComponent} from "../../../../shared/components/nav-link/nav-link.component";
import {AddTransactionPageComponent} from "../../../add-transaction-page/add-transaction-page.component";
import {SettingsModalComponent} from "./settings-modal/settings-modal.component";
import {CategorysModalComponent} from "./categorys-modal/categorys-modal.component";

@Component({
  selector: 'profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss'],
})
export class ProfileListComponent  implements OnInit {
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {}

  ngOnInit() {}

  getComponentByPage(page: string) {
    switch (page) {
      case 'Settings':
        return SettingsModalComponent;
      case 'Categorys':
        return CategorysModalComponent;
      default:
        return null;
    }
  }

  async navigateTo(page: string) {
    const component = this.getComponentByPage(page);
    if (component) {
      const modal = await this.modalController.create({
        presentingElement: this.routerOutlet.nativeEl,
        component: NavLinkComponent,
        componentProps: {
          component: component,
        },
      });
      await modal.present();
    }
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  logout() {
    // Perform logout logic here
    this.modalCtrl.dismiss();
  }
}

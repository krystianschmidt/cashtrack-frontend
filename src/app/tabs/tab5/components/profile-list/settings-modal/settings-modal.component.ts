//settings-modal.component.ts
import {Component, Input, OnInit} from '@angular/core';
import {IonRouterOutlet, ModalController, NavController} from "@ionic/angular";
import {CategorysModalComponent} from "../categorys-modal/categorys-modal.component";
import {NavLinkComponent} from "../../../../../shared/components/nav-link/nav-link.component";
import {CurrencyModalComponent} from "./currency-modal/currency-modal.component";
import {LanguageModalComponent} from "./language-modal/language-modal.component";
import {ThemeModalComponent} from "./theme-modal/theme-modal.component";
import {SecurityModalComponent} from "./security-modal/security-modal.component";
import {NotificationModalComponent} from "./notification-modal/notification-modal.component";
import {AboutModalComponent} from "./about-modal/about-modal.component";
import {HelpModalComponent} from "./help-modal/help-modal.component";

@Component({
  selector: 'settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss'],
})
export class SettingsModalComponent  implements OnInit {

  selectedCurrency!: string;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {}

  getComponentByPage(page: string) {
    switch (page) {
      case 'Currency':
        return CurrencyModalComponent;
      case 'Language':
        return LanguageModalComponent;
      case 'Theme':
        return ThemeModalComponent;
      case 'Security':
        return SecurityModalComponent;
      case 'Notification':
        return NotificationModalComponent;
      case 'About':
        return AboutModalComponent;
      case 'Help':
        return HelpModalComponent;
      default:
        return null;
    }
  }

  async navigateTo(page: string) {
    const component = this.getComponentByPage(page);
    if (component) {
      const modal = await this.modalController.create({
        component: NavLinkComponent,
        componentProps: {
          component: component,
        },
      });
      await modal.present();
      const { data } = await modal.onWillDismiss();

      if (page === 'Currency' && data && data.selectedCurrency) {
        this.selectedCurrency = data.selectedCurrency;
      }
    }
  }



  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}

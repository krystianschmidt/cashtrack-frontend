import { Component } from '@angular/core';
import {IonRouterOutlet, ModalController} from "@ionic/angular";
import {NavLinkComponent} from "../shared/components/nav-link/nav-link.component";
import {AddTransactionPageComponent} from "./add-transaction-page/add-transaction-page.component";

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  add_incomes = AddTransactionPageComponent;
  add_expenses: any;
  tabs = TabsPage;

  constructor(
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {}

  async presentAddTransactionModal(isExpense: boolean) {
    const modal = await this.modalController.create({
      presentingElement: this.routerOutlet.nativeEl,
      component: NavLinkComponent,
      componentProps: {
        component: AddTransactionPageComponent,
        params: {
          isExpense: isExpense
        }
      },
    });

    await modal.present();
  }

}

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import {TransactionPageComponent} from "./transaction-page/transaction-page.component";
import {SharedModule} from "../../shared/shared.module";
import {FilterTransactionListComponent} from "./components/filter-transaction-list/filter-transaction-list.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    SharedModule
  ],
  declarations: [Tab2Page, TransactionPageComponent, FilterTransactionListComponent]
})
export class Tab2PageModule {}

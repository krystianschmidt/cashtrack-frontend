import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';

import { Tab4Page } from './tab4.page';
import {ExploreContainerComponentModule} from "../../explore-container/explore-container.module";
import {BudgetPageComponent} from "./budget-page/budget-page.component";
import {BudgetListComponent} from "./components/budget-list/budget-list.component";
import {BudgetCardComponent} from "./components/budget-list/budget-card/budget-card.component";
import {BudgetDetailComponent} from "./components/budget-list/budget-card/budget-detail/budget-detail.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule,
    ExploreContainerComponentModule,
    SharedModule
  ],
    declarations: [
      Tab4Page,
      BudgetPageComponent,
      BudgetListComponent,
      BudgetCardComponent,
      BudgetDetailComponent
    ]
})
export class Tab4PageModule {}

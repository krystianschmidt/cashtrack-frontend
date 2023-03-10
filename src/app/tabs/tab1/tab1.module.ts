import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import {HomePageComponent} from "../../home-page/home-page.component";
import {HomePageModule} from "../../home-page/home-page.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomePageModule,
    Tab1PageRoutingModule
  ],
    declarations: [Tab1Page]
})
export class Tab1PageModule {}

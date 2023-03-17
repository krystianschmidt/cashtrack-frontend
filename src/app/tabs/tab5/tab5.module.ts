import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5PageRoutingModule } from './tab5-routing.module';

import { Tab5Page } from './tab5.page';
import {ExploreContainerComponentModule} from "../../explore-container/explore-container.module";
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {ProfileListComponent} from "./components/profile-list/profile-list.component";
import {CategorysModalComponent} from "./components/profile-list/categorys-modal/categorys-modal.component";
import {SettingsModalComponent} from "./components/profile-list/settings-modal/settings-modal.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5PageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [Tab5Page, ProfilePageComponent, ProfileListComponent, CategorysModalComponent, SettingsModalComponent]
})
export class Tab5PageModule {}

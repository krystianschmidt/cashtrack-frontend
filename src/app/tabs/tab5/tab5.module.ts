import {NgModule, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {IonicModule, IonRouterOutlet} from '@ionic/angular';

import { Tab5PageRoutingModule } from './tab5-routing.module';

import { Tab5Page } from './tab5.page';
import {ExploreContainerComponentModule} from "../../explore-container/explore-container.module";
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {ProfileListComponent} from "./components/profile-list/profile-list.component";
import {CategorysModalComponent} from "./components/profile-list/categorys-modal/categorys-modal.component";
import {SettingsModalComponent} from "./components/profile-list/settings-modal/settings-modal.component";
import {CurrencyModalComponent} from "./components/profile-list/settings-modal/currency-modal/currency-modal.component";
import {LanguageModalComponent} from "./components/profile-list/settings-modal/language-modal/language-modal.component";
import {ThemeModalComponent} from "./components/profile-list/settings-modal/theme-modal/theme-modal.component";
import {SecurityModalComponent} from "./components/profile-list/settings-modal/security-modal/security-modal.component";
import {
  NotificationModalComponent
} from "./components/profile-list/settings-modal/notification-modal/notification-modal.component";
import {AboutModalComponent} from "./components/profile-list/settings-modal/about-modal/about-modal.component";
import {HelpModalComponent} from "./components/profile-list/settings-modal/help-modal/help-modal.component";
import {ExportDataModalComponent} from "./components/profile-list/export-data-modal/export-data-modal.component";
import {
  CreateCategoryModalComponent
} from "./components/profile-list/categorys-modal/create-category-modal/create-category-modal.component";
import {
  IconPickerComponent
} from "./components/profile-list/categorys-modal/create-category-modal/icon-picker/icon-picker.component";
import {
  ColorPickerComponent
} from "./components/profile-list/categorys-modal/create-category-modal/color-picker/color-picker.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5PageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [
    Tab5Page,
    ExportDataModalComponent,
    ProfilePageComponent,
    ProfileListComponent,
    CategorysModalComponent,
    SettingsModalComponent,
    CurrencyModalComponent,
    LanguageModalComponent,
    ThemeModalComponent,
    SecurityModalComponent,
    NotificationModalComponent,
    AboutModalComponent,
    HelpModalComponent,
    CreateCategoryModalComponent,
    IconPickerComponent,
    ColorPickerComponent
  ]
})
export class Tab5PageModule {
}

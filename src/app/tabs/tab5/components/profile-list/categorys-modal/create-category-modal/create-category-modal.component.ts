import { Component, OnInit } from '@angular/core';
import {ModalController, PopoverController} from "@ionic/angular";
import {Category} from "../categorys-modal.model";
import {IconPickerComponent} from "./icon-picker/icon-picker.component";
import {ColorPickerComponent} from "./color-picker/color-picker.component";

@Component({
  selector: 'create-category-modal',
  templateUrl: './create-category-modal.component.html',
  styleUrls: ['./create-category-modal.component.scss'],
})
export class CreateCategoryModalComponent  implements OnInit {
  category: Category = {
    id: '',
    iconName: '',
    label: '',
    color: '',
  };

  availableIcons = [
    'cart',
    'fast-food',
    'restaurant',
    'cash',
    'card',
    'wallet',
    'business',
    'pricetag',
    'basket',
    // Add more icons here...
  ];

  availableColors = [
    '#9B59B6',
    '#1ABC9C',
    '#26A65B',
    '#FF5733',
    '#FFC300',
    '#DAF7A6',
    '#900C3F',
    '#29ABE2',
    '#F64747',
    // Add more colors here...
  ];

  constructor(
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController
  ) {}

  ngOnInit() {}

  createCategory() {
    this.category.id = Math.random().toString(36).substring(2, 15);
    this.modalCtrl.dismiss(this.category);
  }

  async openIconPicker() {
    const popover = await this.popoverCtrl.create({
      component: IconPickerComponent,
      componentProps: {
        selectedIconName: this.category.iconName,
        selectedIconColor: this.category.color,
      },
      translucent: true,
    });

    await popover.present();

    const { data } = await popover.onWillDismiss();
    if (data) {
      this.selectIcon(data.iconName);
    }
  }

  async openColorPicker() {
    const popover = await this.popoverCtrl.create({
      component: ColorPickerComponent,
      componentProps: {
        selectedColor: this.category.color,
      },
      translucent: true,
    });

    await popover.present();

    const { data } = await popover.onWillDismiss();
    if (data) {
      this.selectColor(data.color);
    }
  }


  selectIcon(icon: string) {
    this.category.iconName = icon;
  }

  selectColor(color: string) {
    this.category.color = color;
  }

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {PopoverController} from "@ionic/angular";
import {Category} from "../../categorys-modal.model";

@Component({
  selector: 'icon-picker',
  templateUrl: './icon-picker.component.html',
  styleUrls: ['./icon-picker.component.scss'],
})
export class IconPickerComponent  implements OnInit {
  category: Category = {
    id: '',
    iconName: '',
    label: '',
    color: '',
  };

  availableIcons: string[] =
    [
      'cafe',
      'book',
      'gift',
      'ribbon',
      'car',
      'bus',
      'home',
      'bed',
      'desktop',
      'phone-portrait',
      'medkit',
      'construct',
      'school',
      'briefcase',
      'shirt',
      'paw',
      'flower',
      'cut',
      'musical-notes',
      'ticket',
      'planet',
    ];
  @Input() selectedIconName: string = this.category.iconName;
  @Input() selectedIconColor: string = this.category.color;


  constructor(private popoverCtrl: PopoverController) {}

  ngOnInit() {}

  updateSelectedIcon(icon: string) {
    this.selectedIconName = icon;
  }

// Update the `selectIcon()` method:
  selectIcon() {
    this.popoverCtrl.dismiss({ iconName: this.selectedIconName });
  }
}

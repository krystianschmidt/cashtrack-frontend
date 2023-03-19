import {Component, Input, OnInit} from '@angular/core';
import {PopoverController} from "@ionic/angular";
import {Category} from "../../categorys-modal.model";

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent  implements OnInit {
  category: Category = {
    id: '',
    iconName: '',
    label: '',
    color: '',
  };

  availableColors: string[] =
    [
      '#ff0000',
      '#663399',
      '#F5D76E',
      '#6C7A89',
      '#D2527F',
      '#87D37C',
      '#4183D7',
      '#34495E',
    ];
  @Input() selectedColor: string = this.category.color;

  constructor(private popoverCtrl: PopoverController) {}

  ngOnInit() {}

  updateSelectedColor(color: string) {
    this.selectedColor = color;
  }

// Update the `selectColor()` method:
  selectColor() {
    this.popoverCtrl.dismiss({ color: this.selectedColor });
  }
}

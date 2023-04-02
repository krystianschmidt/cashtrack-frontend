import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Category} from "./categorys-modal.model";
import {CreateCategoryModalComponent} from "./create-category-modal/create-category-modal.component";
import {CategorysService} from "../../../../../services/categories/categorys.service";

@Component({
  selector: 'categorys-modal',
  templateUrl: './categorys-modal.component.html',
  styleUrls: ['./categorys-modal.component.scss'],
})
export class CategorysModalComponent  implements OnInit {
  categories: Category[] = [];

  constructor(private modalCtrl: ModalController, private categoriesService: CategorysService, private modalController: ModalController) {}

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
  }

  async openCreateCategoryModal() {
    const modal = await this.modalController.create({
      component: CreateCategoryModalComponent,
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.categoriesService.createCategory(result.data);
        this.categories = this.categoriesService.getCategories();
      }
    });

    return await modal.present();
  }

  deleteCategory(categoryId: string) {
    this.categoriesService.deleteCategory(categoryId);
    this.categories = this.categoriesService.getCategories();
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}

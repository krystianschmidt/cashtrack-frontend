import { Injectable } from '@angular/core';
import {Category} from "../../tabs/tab5/components/profile-list/categorys-modal/categorys-modal.model";

@Injectable({
  providedIn: 'root'
})
export class CategorysService {
  private categories: Category[] = [
    { id: '1', iconName: 'cash', label: 'Salary', color: 'primary' },
    // Add more predefined categories here
  ];

  constructor() {}

  getCategories(): Category[] {
    return [...this.categories];
  }

  createCategory(category: Category): void {
    this.categories.push(category);
  }

  deleteCategory(categoryId: string): void {
    this.categories = this.categories.filter((category) => category.id !== categoryId);
  }
}

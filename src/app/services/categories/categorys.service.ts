import { Injectable } from '@angular/core';
import {Category} from "../../tabs/tab5/components/profile-list/categorys-modal/categorys-modal.model";
import {CommunicationRequestService} from "../lib/communication-request.service";
import {HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Budget} from "../../tabs/tab4/components/budget-list/budget-card/budget.model";

@Injectable({
  providedIn: 'root'
})
export class CategorysService extends CommunicationRequestService<any> {


  protected readonly backendUrlExt: string = 'category';

  private _categories: Category[] = [];

  get categories(){
    return this._categories;
  }

  private categoriesSubject = new BehaviorSubject<Category[]>(this._categories);
  public categories$: Observable<Category[]> = this.categoriesSubject.asObservable();

  protected prepareRequestObjectParameter(reqParameter: any): HttpParams {
    return new HttpParams();
  }

  getCategories(): Promise<Category[]> {
    return super.sendGetRequest<Category[]>(this.backendUrlExt).then(categories => {
      this._categories = categories;
      this.categoriesSubject.next(categories);
      return categories;
    })
  }

  createCategory(category: Category): Promise<any> {
    return super.sendPostRequest(this.backendUrlExt, category).then(() => {
      this.getCategories();
    })
  }

  deleteCategory(categoryId: string): Promise<any> {
    return super.sendDeleteRequest(this.backendUrlExt + `/${categoryId}`).then(() => {
      this.getCategories();
    });

    //this._categories = this._categories.filter((category) => category.id !== categoryId);
  }

  addBudget(categoryId: string, budget: Budget) {
    return super.sendPostRequest(this.backendUrlExt + `/${categoryId}/budget`, budget).then(() => {
      this.getCategories();
    });
  }

  deleteBudget(categoryId: string) {
    return super.sendDeleteRequest(this.backendUrlExt + `/${categoryId}/budget`).then(() => {
      this.getCategories();
    });
  }


}

import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Category} from "../../tab5/components/profile-list/categorys-modal/categorys-modal.model";
import {CategorysService} from "../../../services/categories/categorys.service";
import {IonModal} from "@ionic/angular";

@Component({
  selector: 'budget-page',
  templateUrl: './budget-page.component.html',
  styleUrls: ['./budget-page.component.scss'],
})
export class BudgetPageComponent  implements OnInit {

  @Input() selectedMonth: number;
  selectedCategory?: Category;
  @ViewChild(IonModal) modal!: IonModal;

  categories$ = this.categorysService.categories$;


  constructor(public categorysService: CategorysService) {
    this.selectedMonth = new Date().getMonth();
  }

  cancel(){
    this.modal.dismiss(null, 'cancel');
  }

  ngOnInit() {
    if(!(this.categorysService.categories?.length > 0))
      this.categorysService.getCategories()

    this.categories$.subscribe()
  }

  saveBudget() {
    //open modal
    if(this.selectedCategory && this.selectedCategory.id && this.selectedCategory.budget)
      this.categorysService.addBudget(this.selectedCategory.id, this.selectedCategory.budget).then(() => {
        this.modal.dismiss()
      });
  }

  selectCategory(e: any){
    let category = e.detail.value;
    if(!category.budget)
      category.budget = {
        amount: 0
      }
    this.selectedCategory = category;
  }

}
